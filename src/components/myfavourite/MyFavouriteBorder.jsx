import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';

const MyFavouriteBorder = ({ iconColor, disabled = false, onClick }) => (
  <IconButton disabled={disabled} onClick={onClick}>
    <FavoriteBorderIcon sx={{ color: iconColor }} />
  </IconButton>
);

MyFavouriteBorder.propTypes = {
  iconColor: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MyFavouriteBorder;