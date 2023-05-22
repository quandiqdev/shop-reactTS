import React, { useState } from "react";

interface AlertProps {
    message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    return visible ? (
        <div className="alert-msg">
            <span>{message}</span>
            <button onClick={handleClose}>Close</button>
        </div>
    ) : null;
};

export default Alert;
