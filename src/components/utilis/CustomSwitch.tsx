import React from "react";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 40,
  height: 23,
  padding: 4,
  display: "flex",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#07D038",
        opacity: 1,
      },
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.5,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 21,
    height: 19,
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    backgroundColor: "#f5f5f5",
    fontSize: 14,
    fontWeight: "bold",
    position: "relative",
    "&:before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  "& .Mui-checked .MuiSwitch-thumb": {
    "&:before": {
      content: '"✓"',
      color: "#07D038",
      fontSize: "12px",
      fontWeight: "bold",
      border: "1px solid #07D038",
      borderRadius: "50%",
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#e3e3e3",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

interface CustomSwitchProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  sx?: object;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ checked, onChange, disabled }) => {
  return (
    <FormControlLabel
      control={<IOSSwitch checked={checked} onChange={onChange} disabled={disabled} />}
      label=""
    />
  );
};

export default CustomSwitch;
