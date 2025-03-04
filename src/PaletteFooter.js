import React from 'react'

const PaletteFooter = (props) => {
    const {paletteName, emoji} = props;
  return (
      <footer className = 'Pallete=footer'>
     {paletteName}
     <span className ='emoji'>{emoji}</span>
    </footer>
  )
}

export default PaletteFooter;