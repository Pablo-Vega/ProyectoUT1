import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const MyButton = ({
    text,
    textColor,
    backgroundColor,
    borderColor,
    borderWidth,
    size,
    hoverTextColor,
    hoverBackgroundColor,
    disabled = false,
    onClick,
}) => {
    const buttonSizes = {
        small: "small",
        medium: "medium",
        large: "large",
    };

    return (
        <Button
            variant="outlined"
            sx={{
                color: textColor,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: borderWidth,
                ":hover": {
                    backgroundColor: hoverBackgroundColor,
                    color: hoverTextColor,
                },
            }}
            size={buttonSizes[size]}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    hoverTextColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default MyButton;
