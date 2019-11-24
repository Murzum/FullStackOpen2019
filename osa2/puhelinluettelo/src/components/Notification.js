import React from 'react'

    const Notification = ({notificationMessage}) => {

    if (notificationMessage.message === '') {      
            return (
            <div></div>
        )
    }   
    else {
        if (notificationMessage.messageType === 'success') {
            return (
                <div className="success">
                  {notificationMessage.message}
                </div>
            )
        }
        else if (notificationMessage.messageType === 'error') {
            return (
                <div className="error">
                  {notificationMessage.message}
                </div>
            )
        }
        else {
            return (
                <div className="neutral">
                  {notificationMessage.message}
                </div>
            )
        }
    }
}
export default Notification