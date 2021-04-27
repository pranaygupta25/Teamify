

const chatBox = document.querySelector(".chatlist");
const messageInput = document.querySelector('.chatbox');
const send = document.querySelector(".s_button")

const name = getCookie("name");
console.log(name);
socket.emit("new-user-connected" , name);

// Says Hey to to user and tell his name
function welcome_bot(){
    let name = getCookie("name");
    let chatItem = document.createElement("li");
    chatItem.classList.add("bot__output");
    chatItem.classList.add("bot__output--standard");
    chatItem.innerHTML = "Hey " + name + "" + ", I'm Teamify!";
    chatBox.appendChild(chatItem);
}
welcome_bot();

send.addEventListener("click" , function(){
    let msg = messageInput.value;
    if(msg){
        var chatItem = document.createElement('li');
        chatItem.classList.add("userInput");
        chatItem.innerHTML = msg;
        chatBox.appendChild(chatItem);
        messageInput.value="";
        chatBox.scrollTop = chatBox.scrollHeight;
        socket.emit("message-send" , msg);
    }
})