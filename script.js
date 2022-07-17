const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/Vincent van Gogh.svg",
    post: "images/post-image.svg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/Gustave Courbet.svg",
    post: "images/post-image (1).svg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/Joseph Ducreux.svg",
    post: "images/post-image (2).svg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function getData() {
  posts.map((data) => {
    const body = document.querySelector(".container");
    const mainSection = document.createElement("main");
    const mainHeadSection = document.createElement("section");
    const infoContainer = document.createElement("div");
    const mainPostSection = document.createElement("section");
    const footerSection = document.createElement("footer");
    const footerControl = document.createElement("div");
    const footerControlInfo = document.createElement("div");
    mainSection.classList.add("main");
    mainHeadSection.classList.add("main--head");
    infoContainer.classList.add("main--head__info-container");
    mainPostSection.classList.add("main--post");
    footerSection.classList.add("footer--controls");
    footerControl.classList.add("footer--btns");
    footerControlInfo.classList.add("footer--controls__info");

    const userImage = document.createElement("img");
    const userLocation = document.createElement("p");
    const userName = document.createElement("p");
    const userPost = document.createElement("img");
    const likeImage = document.createElement("img");
    const commentImage = document.createElement("img");
    const shareImage = document.createElement("img");
    const likeCount = document.createElement("p");
    const user = document.createElement("p");

    userImage.classList.add("main--head__user-image");
    userLocation.classList.add("main--head__user-location");
    userName.classList.add("main--head__user-name");
    userPost.classList.add("main--post__user-post");
    likeCount.classList.add("footer--controls__count");
    user.classList.add("footer--controls__description");
    likeImage.classList.add("likeImg");
    commentImage.classList.add("commentImg");
    shareImage.classList.add("shareImg");
    likeImage.src = "images/like.svg";
    commentImage.src = "images/comment.svg";
    shareImage.src = "images/share.svg";
    likeCount.classList.add("likeCount");
    user.classList.add("userName");

    userName.textContent = data.name;
    userLocation.textContent = data.location;
    userImage.src = data.avatar;
    userPost.src = data.post;
    likeCount.textContent = `${data.likes} likes`;
    user.innerHTML = `${data.username} <p class="comment">${data.comment}</p>`;
    mainSection.append(mainHeadSection);
    mainSection.append(mainPostSection);
    mainSection.append(footerSection);
    mainHeadSection.append(userImage);
    mainHeadSection.append(infoContainer);
    infoContainer.append(userName);
    infoContainer.append(userLocation);
    mainPostSection.append(userPost);
    footerSection.append(footerControl);
    footerSection.append(footerControlInfo);
    footerControl.append(likeImage);
    footerControl.append(commentImage);
    footerControl.append(shareImage);
    footerControlInfo.append(likeCount);
    footerControlInfo.append(user);

    userPost.addEventListener("dblclick", () => {
      likeCount.textContent = `${data.likes++} likes`;
    });

    likeImage.addEventListener("dblclick", () => {
      likeImage.classList.add("likeFilled");
    });

    body.appendChild(mainSection);
  });
}

getData();
