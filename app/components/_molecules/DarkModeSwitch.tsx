import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 32,
  height: 20,
  padding: 0,
  display: "flex",
  "& .MuiSwitch-switchBase": {
    padding: 4,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#A729F5",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 12,
    height: 12,
    backgroundColor: "#fff",
    borderRadius: "50%",
  },
  "& .MuiSwitch-track": {
    borderRadius: 34 / 2,
    backgroundColor: "#A729F5",
    opacity: 1,
    boxSizing: "border-box",
  },

  [theme.breakpoints.up(768)]: {
    width: 48,
    height: 28,
    "& .MuiSwitch-thumb": {
      width: 20,
      height: 20,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(20px)",
    },
  },
}));

export default CustomSwitch;
