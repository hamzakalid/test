
/* <div class="chatBox">
        <button class="icon" onclick="showChatBox()">
            <img src="https://labibbot.azurewebsites.net/Content/images/bot_logo.png" alt="">
        </button>
        <div class="box">
            <button class="close" onclick="hideChatBox()">
                <svg _ngcontent-nas-c16="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 378.303 378.303" xml:space="preserve" style="enable-background: new 0 0 378.303 378.303;"><polygon _ngcontent-nas-c16="" points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018
                    28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 " style="fill: #fff;"></polygon></svg>
            </button>
            <iframe src="http://localhost:4200/" frameborder="0"></iframe>
        </div>
    </div> */

let page = "/";
let body = document.getElementsByTagName("body")[0];
let html = `<div class="chatBox">
                <button class="icon" onclick="showChatBox()">
                    <img src="https://labibbot.azurewebsites.net/Content/images/bot_logo.png" alt="">
                </button>
                <div class="box">
                    <button class="close" onclick="hideChatBox()">
                        <svg _ngcontent-nas-c16="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 378.303 378.303" xml:space="preserve" style="enable-background: new 0 0 378.303 378.303;"><polygon _ngcontent-nas-c16="" points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018
                            28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 " style="fill: #fff;"></polygon></svg>
                    </button>
                    <iframe src="${page}" frameborder="0"></iframe>
                </div>
            </div>`;
Box = document.getElementsByClassName("box");

addHtml(html);

// add html code to chat bot
function addHtml(html) {
    body.innerHTML += html;
}

function showChatBox(){
    Box[0].style.display = "block";
}

function hideChatBox(){
    Box[0].style.display = "none";
}
