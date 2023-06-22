window.addEventListener("DOMContentLoaded", (e) => {
    var header = document.querySelector(".header");
    var chatRoom = document.querySelector(".chat-room");
    var typeArea = document.querySelector(".ch");
   
    const messages = document.getElementById("messages");
    
    header.addEventListener("click", (e) => {
      if (chatRoom.style.display === 'none') {
        chatRoom.style.display = "block";
      } else {
        
        chatRoom.style.display = "none";
      }
      
    });})
    
    function sendMessage() {
      const inputMessage = document.getElementById("input-message");
      const messageText = inputMessage.value.trim();
      
      if (messageText !== "") {
        const message = document.createElement("div");
        message.className = "message user-message";
        message.textContent = messageText;
        
        const timestamp = document.createElement("span");
        timestamp.className = "timestamp";
        timestamp.textContent = new Date().toLocaleTimeString();
        
        message.appendChild(timestamp);
        messages.appendChild(message);
        
        inputMessage.value = "";
        
        // Simulate bot response after 1 second
        setTimeout(sendBotMessage, 1000);
        
      }
    }
    
    function sendBotMessage() {
      const responses = [
        "Hello, how can I help you today? 😊",
        "I'm sorry, I didn't understand your question😕",
        "I'm here to assist you with any questions or concerns you may have. 📩",
        " Is there anything else I can help with? 💻",
        "What would you like to know? 🤔",
        "You can call our team..",
        "I'm here to assist you with any questions or problems you may have. How can I help you today? 🚀",
        "Is there anything specific you'd like to talk about? 💬",
        "I'm happy to help with any questions or concerns you may have. Just let me know how I can assist you. 😊",
        "I'm here to assist you with any questions or problems you may have. What can I help you with today? 🤗",
        /*"Is there anything specific you'd like to ask or talk about? I'm here to help with any questions or concerns you may have. 💬",
        "I'm here to assist you with any questions or problems you may have. How can I help you today? 💡",*/
      ];
      
      // Return a random response
    a= Math.floor(Math.random() * responses.length);
    
      

      const message = document.createElement("div");
      message.className = "message bot-message";
      
      /*message.textContent = "Sure We are here to help you";*/
     message.innerHTML = responses[a];
      
      const timestamp = document.createElement("span");
      timestamp.className = "timestamp";
      timestamp.textContent = new Date().toLocaleTimeString();
      
      message.appendChild(timestamp);
      messages.appendChild(message);
      /*}
else{
  message.textContent = "help you";
     
      
      const timestamp = document.createElement("span");
      timestamp.className = "timestamp";
      timestamp.textContent = new Date().toLocaleTimeString();
      
      message.appendChild(timestamp);
      messages.appendChild(message);

}*/

    }
    