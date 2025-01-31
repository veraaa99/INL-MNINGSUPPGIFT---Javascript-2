import { createContext, useContext, useState } from "react";

export const MessageContext = createContext()

// Message context
function MessageContextProvider({ children }) {

    // State to check and update if a form message has been sent
    const [isMessageSubmitted, setIsMessageSubmitted] = useState(false)

    // Post a message to the API (with name, email and message values)
    const sendMessage = async (values) => {
        const newMessage = {
            name: values.name,
            email: values.email,
            message: values.message
        }
    
        try {
            let response = await fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newMessage)
            })

            // If response from API is 200, set the isMessageSubmitted state to true
            if (checkResponse(response.status)) {
                setIsMessageSubmitted(true)
            }

            return true

        } catch (error) {
            console.error(error.message)
        }
    }

    // Check if response from API is 200 
    const checkResponse = (response) => {
        return response == 200;
    }

    // Values to be passed from the Message Context
    const value = {
        sendMessage,
        isMessageSubmitted,
        setIsMessageSubmitted
    }

    // Message context provider to share values with children (=components using the Message context)
    return (
        <MessageContext.Provider value={value}>
            { children }
        </MessageContext.Provider>
    )
}

export default MessageContextProvider

// Custom hook with useContext-hook, to let children access the context
// If the hook isn't called inside the Message Context Provider, throw error
export const useMessageContext = () => {
    const context = useContext(MessageContext)

    if(!context) throw new Error('useMessageContext must be called inside a MessageContextProvider')

    return context
}