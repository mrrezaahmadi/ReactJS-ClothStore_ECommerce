import React from "react";

// import "./custom-button.styles.scss";
import { CustomButtonContainer } from "./cutsom-button.styles";

const CustomButton = ({ children, ...props }) => (
	<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
