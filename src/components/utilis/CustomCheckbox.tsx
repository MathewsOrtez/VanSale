import React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { AiOutlineCheck } from "react-icons/ai";

// Styling for the unchecked state of the checkbox
const BpIcon = styled('span')(() => ({
  borderRadius: 6,
  width: 20,
  height: 20,
  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: '#f0f0f0',
  },
  'input:disabled ~ &': {
    backgroundColor: 'rgba(206,217,224,.5)',
    boxShadow: 'none',
  },
}));

// Styling for the checked state of the checkbox
const BpCheckedIcon = styled(BpIcon)(() => ({
  backgroundColor: '#4ba4f5',
  border: '1px solid #4ba4f5',
  color: '#fff',
  'input:hover ~ &': {
    backgroundColor: '#379de6',
  },
}));

// Updated Custom Checkbox component
interface CustomCheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  sx?: object;
}

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
      sx={{
        '&:hover': { bgcolor: 'transparent' },
        marginLeft: '4px',
        padding: '6px',
        ...sx,
      }}
      disableRipple
      color="default"
      checkedIcon={
        <BpCheckedIcon>
          <AiOutlineCheck size={12} />
        </BpCheckedIcon>
      }
      icon={<BpIcon />}
      inputProps={{ 'aria-label': label || 'Checkbox' }}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
  );
}

export default CustomizedCheckbox;
