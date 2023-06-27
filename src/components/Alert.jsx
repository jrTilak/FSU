"use client"
import { useEffect } from "react"
import { useGlobalContext } from "./../app/GlobalContext"
import "./alert.css"

const Alert = () => {
    const { showAlert, setShowAlert, alertType, alertMessage, alertIconType, setAlertIconType } = useGlobalContext()
    useEffect(() => {
        if (showAlert) {
            document.querySelector(".progress").classList.add("active");
            let alertComp = document.querySelector(".alert")
            alertComp.classList.add("active");
            alertComp.classList.remove("warning");
            alertComp.classList.remove("error");
            alertComp.classList.remove("success");

            switch (alertType) {
                case "success":
                    alertComp.classList.add("success");
                    setAlertIconType("bxs-check-circle")
                    break;
                case "warning":
                    alertComp.classList.add("warning");
                    setAlertIconType("bxs-info-circle")
                    break;
                case "error":
                    alertComp.classList.add("error");
                    setAlertIconType("bxs-error-circle")
                    break;
                default:
                    break;
            }
            setTimeout(() => {
                setShowAlert(false)
            }, 4000);
        }
        else {
            document.querySelector(".alert").classList.remove("active");
            setTimeout(() => {
                document.querySelector(".progress").classList.remove("active");
            }, 3000);
        }
    }, [alertType, setAlertIconType, setShowAlert, showAlert])

    return (
        <div className="alert">
            <div className="alert-content">
                <i className={`bx ${alertIconType}`}></i>
                <div className="message">
                    <span className="text text-1">{alertType}</span>
                    <span className="text text-2">{alertMessage}</span>
                </div>
            </div>
            <div className="progress "></div>
        </div>
    )
}
export default Alert