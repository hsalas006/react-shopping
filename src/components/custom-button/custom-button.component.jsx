import React from "react";

import "./custom.styles.scss";

const CustomButton = ({children, isGoogleAuth, ...otherProps}) => (
    <button className={`${isGoogleAuth ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;