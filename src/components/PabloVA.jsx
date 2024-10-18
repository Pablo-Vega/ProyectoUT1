import { Avatar } from '@mui/material';

const PabloVA = ({ initials, backgroundColor, textColor }) => {
  return (
    <Avatar sx={{ backgroundColor, color: textColor }}>
      {initials}
    </Avatar>
  );
};

export default PabloVA;
