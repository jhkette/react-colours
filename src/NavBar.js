import React, {Component} from 'react'
import Slider, { Range } from 'rc-slider';
import Select from "@mui/material/Select"
import MenuItem from '@mui/material/MenuItem';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import 'rc-slider/assets/index.css';
import './Navbar.css'
import {Link} from "react-router-dom";
class  NavBar extends Component {

 state ={
     format: "hex",
     level: 500,
     open: false
 }  
 
 handleFormatChange = (e) =>{
     this.setState({format: e.target.value})
     this.props.handleChange(e.target.value)
     this.setState({open: true})

 } 
 

 closeSnackBar = () =>{
    this.setState({open: false})
}
 render () {
const {level, changeLevel, handleFormatChange, showingAllColors} = this.props;
const {format} = this.state;
return (
    <header className ="NavBar">
        <div className="logo">
          <Link to="/">Reactcolorpicker</Link>
        </div>
        {showingAllColors &&(
        <div className ="slider-container">
       <span className="level">Level: {level}</span>
        <div className="slider">
        <Slider  defaultValue={level} 
                min ={100} 
                max={900} 
                step={100} 
                onAfterChange={changeLevel}/>
        </div>
        </div> )}
        <div className ="select-container">
            <Select  value = {format} onChange={this.handleFormatChange}>
                <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                <MenuItem value='rgb'>rgb - rgb(255, 255, 255)</MenuItem>
                <MenuItem value='rgba'>rgba - rgba(255, 255, 255, 1.0)</MenuItem>

            </Select>    
        </div>
       <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}}
       open = {this.state.open} 
       autoHideDuration ={3000}
       message ={<span id= 'message-id'>Format changed to {format.toUpperCase()}</span>}
       ContentProps={{
           "aria-describedby" : "message-id"
       }}
       onClose ={this.closeSnackBar}
       action={[
           <IconButton
           aria-label ='close'
           onClick ={this.closeSnackBar}
           key ='close'
           color = 'inherit'
           >
            <CloseIcon/>
           </IconButton>,
       ]}
       />
    </header>
  )
  }
}


export default NavBar