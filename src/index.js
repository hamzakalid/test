
let page = "http://localhost:4200/";

let chatBox = document.getElementsByClassName("chatBox");
let Box = document.getElementsByClassName("box");
let html = `<iframe src='${page}' frameborder='0'></iframe>`;

let header = document.getElementsByClassName("pull-right");

addHtml(html);

// add html code to chat bot
function addHtml(html) {
    // chatBox[0].innerHTML = "<button>Chat</button>";
    // chatBox[1].innerHTML = html;
}

function showChatBox(){
    Box[0].style.display = "block";
}

function hideChatBox(){
    Box[0].style.display = "none";
}
