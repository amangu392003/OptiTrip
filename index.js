document.getElementById("send_button").addEventListener("click", () => {
    const userMessage = document.getElementById("user_input").value;
    if (userMessage.trim()) {
        displayMessage(userMessage, "user");
        fetchAIResponse(userMessage);
        document.getElementById("user_input").value = "";
    }
});

function displayMessage(message, sender) {
    const chatWindow = document.getElementById("chat_window");
    const messageElement = document.createElement("div");
    messageElement.className = sender === "user" ? "user_message" : "ai_message";
    messageElement.innerText = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function fetchAIResponse(userInput) {
    const response = await fetch("YOUR_BACKEND_API_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
    });
    const data = await response.json();
    displayMessage(data.reply, "ai");
}
