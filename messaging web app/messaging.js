
function sendMessage() {
    var inputMessage = document.getElementById("inputMessage").value;
    var messagesDiv = document.getElementById("messages");
    
    var messageDiv = document.createElement("div");
    messageDiv.className = "message";
    
    var messageText = document.createElement("p");
    messageText.textContent = inputMessage;
    
    messageDiv.appendChild(messageText);
    messagesDiv.appendChild(messageDiv);
    
    document.getElementById("inputMessage").value = "";
}
