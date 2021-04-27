

socket.on("receive-msg",function(obj){
    let chatItem = document.createElement("li");
    
    chatItem.classList.add("bot__output");
    chatItem.classList.add("bot__output--standard");
    chatItem.innerHTML = `${obj.name} : ${obj.message}`;
    chatBox.appendChild(chatItem);
    chatBox.scrollTop = chatBox.scrollHeight;

})

socket.on("new-user" , function(name){
    let chatItem = document.createElement("li");
    chatItem.classList.add("bot__output");
    chatItem.classList.add("bot__output--standard");
    chatItem.innerHTML = `${name} joined chat`;
    chatBox.appendChild(chatItem);
    chatBox.scrollTop = chatBox.scrollHeight;
})

socket.on("left-chat" , function(name){
    let chatItem = document.createElement("li");
    chatItem.classList.add("bot__output");
    chatItem.classList.add("bot__output--standard");
    chatItem.innerHTML = `${name} left chat`;
    chatBox.appendChild(chatItem);
    chatBox.scrollTop = chatBox.scrollHeight;
})