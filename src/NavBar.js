import React, {Component} from 'react'
import Slider, { Range } from 'rc-slider';
import Select from "@material-ui/core/Select"
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css'

class  NavBar extends Component {

 state ={
     format: "hex",
     level: 500
 }  
 
 handleChange = (e) =>{
     this.setState({format: e.target.value})
     this.props.handleChange(e.target.value)

 } 
 render () {
const {level, changeLevel, handleChange} = this.props;
const {format} = this.state;
return (
    <header className ="NavBar">
        <div className="logo">
          <a href="#">Reactcolorpicker</a>
        </div>
        <div className ="slider-container">
       <span class="level">Level: {level}</span>
        <div className="slider">
        <Slider  defaultValue={level} 
                min ={100} 
                max={900} 
                step={100} 
                onAfterChange={changeLevel}/>
        </div>
        </div>
        <div className ="select-container">
            <Select  value = {format} onChange={this.handleChange}>
                <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                <MenuItem value='rgb'>rgb - rgb(255, 255, 255)</MenuItem>
                <MenuItem value='rgba'>rgba - rgba(255, 255, 255, 1.0)</MenuItem>

            </Select>    
        </div>
      
    </header>
  )
  }
}


export default NavBar