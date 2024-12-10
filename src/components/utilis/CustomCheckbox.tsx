import React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

// Styling for the unchecked state of the checkbox
const BpIcon = styled('span')(({ theme }) => {
  const isDarkMode = theme.palette.mode === 'dark';
  return {
    borderRadius: 3,
    width: 20,
    height: 20,
    boxShadow: isDarkMode
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: isDarkMode ? '#394b59' : '#f5f8fa',
    backgroundImage: isDarkMode
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: isDarkMode ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: isDarkMode ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  };
});

// Styling for the checked state of the checkbox
const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#4ba4f5',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    borderRadius: 5,
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#4ba4f5',
    boxShadow: '0 0 0 1px #4ba4f5',
  },
});

// Props interface
interface CustomCheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  sx?: object;
}

// Updated CustomizedCheckbox component
function CustomizedCheckbox({
  checked = false,
  onChange = () => {},
  disabled = false,
  label = '',
  sx = {},
  ...rest
}: CustomCheckboxProps) {
  return (
    <Checkbox
      sx={{ '&:hover': { bgcolor: 'transparent' }, ...sx }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': label || 'Checkbox demo' }}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
  );
}

export default CustomizedCheckbox;
