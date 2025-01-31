import SettingsContext from "./SettingsContext";
import { useContext } from "react";
import { Box, Slider, Typography } from "@mui/material";

const marks = [
  { value: 5, label: "5 min" },
  { value: 25, label: "25 min" }, // Pomodoro default
  { value: 50, label: "50 min" },
  { value: 90, label: "90 min" },
];

export default function Slid() {
  const SettingsInfo = useContext(SettingsContext);
  return (
    <Box sx={{ width: 320, textAlign: "center", mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        ⏳ Work Minutes
      </Typography>
      <Slider
        value={SettingsInfo.WorkMinutes}
        onChange={(_, newValue) => SettingsInfo.setWorkMinutes(newValue)}
        step={5}
        min={5}
        max={90}
        marks={marks}
        valueLabelDisplay="on"
        sx={{
          color: "#FF5733",
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
            border: "2px solid #FF5733",
            boxShadow: "0px 0px 5px rgba(255, 87, 51, 0.8)",
          },
          "& .MuiSlider-track": {
            height: 6,
          },
          "& .MuiSlider-rail": {
            height: 6,
            opacity: 0.3,
          },
        }}
      />
    </Box>
  );
}

