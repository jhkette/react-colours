import React from "react";
import { styled } from "@mui/system";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "5px",
  padding: ".85rem",
  position: "relative",
  overflow: "hidden",

  border: "1px solid black",
  "&:hover": {
    cursor: "pointer",
  },
}));

const Colors = styled("div")({
  backgroundColor: "#dae1e4",
  height: "150px",
  width: "100%",
  borderRadius: "5px",
  overflow: "hidden",
});

const Title = styled("h5")({
  display: "flex",
  justifyContent: "space-between",
  margin: "0",
  color: "black",
  paddingTop: "0.5rem",
  paddingBottom: "0.75rem",
  fontSize: "1rem",
  position: "relative",
});

const MiniColor = styled("div")({
  height: "25%",
  width: "20%",
  display: "inline-block",
  margin: "0 auto",
  position: "relative",
  marginBottom: "-3.5px",
});

function MiniPalette({ paletteName, emoji, colors, handleClick }) {
  return (
    <Root onClick={handleClick}>
      <Colors>
        {colors.map((color) => (
          <MiniColor key={color.name} style={{ backgroundColor: color.color }} />
        ))}
      </Colors>
      <Title>
        {paletteName} <span>{emoji}</span>
      </Title>
    </Root>
  );
}

export default MiniPalette;