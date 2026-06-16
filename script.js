function setupLikeButtons() {

document.querySelectorAll(".fa-heart").forEach(icon => {

icon.addEventListener("click", function() {

let post = this.closest(".post");

let likeCount =
post.querySelector(".likeCount");

let count =
parseInt(likeCount.innerText);

if(this.classList.contains("fa-regular")){

this.classList.remove("fa-regular");    
this.classList.add("fa-solid");    

likeCount.innerText = count + 1;

}else{

this.classList.remove("fa-solid");    
this.classList.add("fa-regular");    

likeCount.innerText = count - 1;

}

});

});

}

/* ---------- 2. CREATE POST (FRONTEND ONLY) ---------- */
function createPost(){

let caption =
document.getElementById("captionInput").value;

let imageFile =
document.getElementById("imageInput").files[0];

if(!caption && !imageFile){
alert("Add caption or image");
return;
}

let reader = new FileReader();

reader.onload = function(e){

let imageURL = e.target.result;

let post = `

  <div class="post">    <div class="post-header">    
  <img src="https://i.pravatar.cc/100?img=9">    

  <div>    
    <h4>You</h4>    
    <p>Just now</p>    
  </div>    
</div>    

<img class="post-image"    
src="${imageURL}">    

<div class="post-actions">

<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-comment"></i>
<i class="fa-regular fa-paper-plane"></i>

</div>  <p class="caption">    
      <b>You</b> ${caption}    
    </p>      </div>    
`;    document.querySelector(".feed")
.insertAdjacentHTML("afterbegin", post);
setupLikeButtons();

};

if(imageFile){
reader.readAsDataURL(imageFile);
}
}
function addComment(btn){

  let post = btn.closest(".post");
  let input = post.querySelector(".commentInput");
  let comments = post.querySelector(".comments");

  let text = input.value.trim();

  if(text === ""){
    return;
  }

  let commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");

  commentDiv.innerHTML = `
    <b>You:</b> ${text}
    <button class="deleteBtn">Delete</button>
  `;

  comments.appendChild(commentDiv);

  input.value = "";

  // delete functionality
  commentDiv.querySelector(".deleteBtn").addEventListener("click", function(){
    commentDiv.remove();
  });

}

/* ---------- 3. STORIES SCROLL EFFECT (optional) ---------- */
function setupStories() {
const stories = document.querySelector(".stories");

stories.addEventListener("wheel", (e) => {
e.preventDefault();
stories.scrollLeft += e.deltaY;
});
}

/* ---------- 4. NAV ICON ACTIVE STATE ---------- */
function setupBottomNav() {
document.querySelectorAll(".bottom-nav i").forEach(icon => {
icon.addEventListener("click", () => {
document.querySelectorAll(".bottom-nav i").forEach(i => {
i.classList.remove("active");
});
icon.classList.add("active");
});
});
}

/* ---------- 5. INITIALIZE ALL FEATURES ---------- */
function initInstagramUI() {
setupLikeButtons();
setupStories();
setupBottomNav();
}
function showScreen(screen){

document.querySelectorAll(".screen").forEach(s=>{
s.classList.remove("active");
});

document.getElementById(screen + "Screen").classList.add("active");
}

/* ---------- RUN APP ---------- */
document.addEventListener("DOMContentLoaded", initInstagramUI);

window.onload = function(){

let savedName =
localStorage.getItem("instaName");

let savedPic =
localStorage.getItem("instaPic");

if(savedName){
document.getElementById("homeProfileName").innerText =
savedName;
}

if(savedPic){
document.getElementById("homeProfilePic").src =
savedPic;
}
};
function followUser(btn){

let followers =
parseInt(localStorage.getItem("followers")) || 120;

if(btn.innerText.trim() === "Follow"){

followers++;

btn.innerText = "Following";
btn.style.backgroundColor = "green";
btn.style.color = "white";

} else {

followers--;

btn.innerText = "Follow";
btn.style.backgroundColor = "";
btn.style.color = "";

}

localStorage.setItem("followers", followers);

// Update profile page count if available
let count = document.getElementById("followersCount");

if(count){
count.innerText = followers;
}
}

