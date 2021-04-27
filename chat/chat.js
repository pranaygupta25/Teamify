

const chatBox = document.querySelector(".chatlist");
const messageInput = document.querySelector('.chatbox');
const send = document.querySelector(".s_button")

const name = prompt("Enter your Name");
console.log(name);
socket.emit("new-user-connected" , name);




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