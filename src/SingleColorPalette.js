import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import NavBar from "./NavBar"
import PaletteFooter from './PaletteFooter'
import {Link} from 'react-router-dom'

// this loops to fin different shades of colour. ie differnt shades of blue. 

class SingleColorPalette extends Component {

  constructor(props) {
    super(props);
    this.changeFormat = this.changeFormat.bind(this);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {format: "hex"};
  }

  changeFormat =(val) =>{
    this.setState({format: val})
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    //return all shades of given color
    return shades.slice(1); //removes white - ie the first color - shows everything else. 
  }

 
  render() {
    const {format} = this.state;
    const {paletteName, emoji, id} = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className='SingleColorPalette Palette'>
        <NavBar 
        handleChange={this.changeFormat}
        showingAllColors ={false}
        />
        <h1>Single Color Palette</h1>
        <div className='Palette-colors'>
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">GO Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji ={emoji} />
      </div>
    );
  }
}
export default SingleColorPalette;