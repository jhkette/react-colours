import React, { Component } from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import MiniPalette from "./Minipalette";

const Root = styled("div")({
  backgroundColor: "blue",
  height: "100vh",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
});

const Container = styled("div")({
  width: "50%",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  flexWrap: "wrap",
});

const Nav = styled("nav")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  color: "white",
});

const Palettes = styled("div")({
  boxSizing: "border-box",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3, 30%)",
  gridGap: "5%",
});

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`palette/${id}`); // Keeping legacy navigation
  }

  render() {
    const { palettes } = this.props;

    return (
      <Root>
        <Container>
          <Nav>
            <h1>React Colors</h1>
          </Nav>
          <Palettes>
            {palettes.map((palette) => (
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
                key={palette.id}
              />
            ))}
          </Palettes>
        </Container>
      </Root>
    );
  }
}

export default PaletteList;