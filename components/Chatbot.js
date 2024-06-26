import { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const sendMessage = async () => {
    if (!inputText) return;

    try {
      // Send message to backend API
      const response = await axios.post("/api/chatbot", { message: inputText });

      // Update chat messages with user input and bot response
      setMessages([
        ...messages,
        { sender: "user", text: inputText },
        { sender: "bot", text: response.data.response },
      ]);

      // Clear input text
      setInputText("");
    } catch (error) {
      console.error("Chatbot API Error:", error.message);
      // Handle error if needed
    }
  };

  return (
    <Box p="4" bg="gray.800" color="white">
      {/* Chat messages display */}
      {messages.map((message, index) => (
        <Box
          key={index}
          textAlign={message.sender === "user" ? "right" : "left"}
        >
          {message.text}
        </Box>
      ))}

      {/* Input area for typing messages */}
      <Box display="flex" mt="4">
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <Button ml="3" onClick={sendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;
