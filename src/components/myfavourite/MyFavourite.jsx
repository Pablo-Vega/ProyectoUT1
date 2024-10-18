import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";

const MyFavourite = ({ iconColor, disabled = false, onClick }) => (
  <IconButton disabled={disabled} onClick={onClick}>
    <FavoriteIcon sx={{ color: iconColor }} />
  </IconButton>
);

MyFavourite.propTypes = {
  iconColor: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MyFavourite;
