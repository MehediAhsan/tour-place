import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user message to the chat
    setMessages([...messages, { text: inputText, type: 'user' }]);
    setInputText('');

    // Simulate a bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputText);
      setMessages([...messages, { text: botResponse, type: 'bot' }]);
    }, 500);
  };

  const generateBotResponse = (userMessage) => {
    // Replace this with your actual chatbot logic or API integration
    const responses = {
      'hello': 'Hi there! How can I assist you today?',
      'about': 'We are a passionate team of travel enthusiasts dedicated to helping you plan your dream vacations.',
      'destination:paris': 'Paris is known for its romantic atmosphere, iconic landmarks like the Eiffel Tower, and world-class cuisine. How can I help you plan your trip to Paris?',
    'destination:new-york': 'New York City, the city that never sleeps! What do you want to know about New York?',
    'attractions:london': 'London is home to many famous attractions, including the Tower of London, Buckingham Palace, and the British Museum. Which attraction are you interested in?',
'weather:rome': 'Rome generally has a Mediterranean climate with hot, dry summers and mild, wet winters. What time of year are you planning to visit?',
'transportation:tokyo': 'Tokyo has an efficient public transportation system, including trains and subways. Would you like information on getting around Tokyo?',
      // Add more response cases as needed
      'default': "I'm sorry, I didn't understand that. Can you please rephrase your question?",
    };

    const lowerUserMessage = userMessage.toLowerCase();
    const botResponse = responses[lowerUserMessage] || responses['default'];

    return botResponse;
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col h-full pb-20">
      <div className="flex-grow  p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`text-sm p-2 rounded-lg ${message.type === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-200 self-start'} mb-2`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className=" p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
