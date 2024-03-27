const commentsDiv = document.querySelector("#comments");

async function getComments() {
    const response = await fetch("https://dummyjson.com/comments");
    const json = await response.json();

    console.log(json.comments);

    for(const comment of json.comments) {
        const userName = document.createElement("h3");
        userName.innerText = comment.user.username;

        const body = document.createElement("p");
        body.innerText = comment.body;

        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.appendChild(userName);
        commentDiv.appendChild(body);

        commentsDiv.appendChild(commentDiv);
    }
};



getComments();