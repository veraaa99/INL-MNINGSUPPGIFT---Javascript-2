import { createContext, useContext, useState } from "react";

export const MessageContext = createContext()

function MessageContextProvider({ children }) {

const [isMessageSubmitted, setIsMessageSubmitted] = useState(false)

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
            const data = await response.json()

            console.log(data) 
            console.log(checkResponse(response.status)) 

            return (checkResponse(response.status))

        } catch (error) {
            console.error(error.message)
        }
    }

    const checkResponse = (response) => {
        return response == 200;
    }

    const value = {
        sendMessage,
        isMessageSubmitted,
        setIsMessageSubmitted
    }

    return (
        <MessageContext.Provider value={value}>
            { children }
        </MessageContext.Provider>
    )
}

export default MessageContextProvider

export const useMessageContext = () => {
    const context = useContext(MessageContext)

    if(!context) throw new Error('useMessageContext must be called inside a MessageContextProvider')

    return context
}