"use client"
import { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"
const Context = createContext()
export const useGlobalContext = () => useContext(Context)

const GlobalContext = ({ children }) => {
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState("")
    const [alertMessage, setAlertMessage] = useState("")
    const [alertIconType, setAlertIconType] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleAlert = (type, message) => {
        setShowAlert(true)
        setAlertType(type)
        setAlertMessage(message)
    }

    return (
        <Context.Provider
            value={
                {
                    showAlert, setShowAlert,
                    alertType, setAlertType,
                    alertMessage, setAlertMessage,
                    alertIconType, setAlertIconType,
                    handleAlert,
                    isSubmitting, setIsSubmitting
                }
            }

        >
            {children}
        </Context.Provider>
    )
}
GlobalContext.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GlobalContext