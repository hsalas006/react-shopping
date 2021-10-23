import React from "react";

import "./custom.styles.scss";

const CustomButton = ({children, isGoogleAuth, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleAuth ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;