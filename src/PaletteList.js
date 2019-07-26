import React, { Component } from 'react'
import { palette } from '@material-ui/system';
import {Link} from "react-router-dom";
import MiniPalette from './Minipalette';

class PaletteList extends Component {
  render() {
      const {palettes} = this.props;
    return (
      <div>
          <MiniPalette />
      {palettes.map(palette => (
        <p>
            <Link to ={`/palette/${palette.id}`}>{palette.paletteName}</Link></p>
      ))}
        
      </div>
    )
  }
}


export default PaletteList