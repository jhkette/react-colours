import React, {Component} from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from "react-router-dom";
import chroma from "chroma-js";


class ColorBox extends Component {
    constructor(props){
        super(props)
        this.state ={copied: false}
    }

     changeCopyState = () => {

        this.setState({ copied: true }, () => {
            // a settimeout callback function
          setTimeout(() => this.setState({ copied: false }), 1500);
        });
      }
    render(){
        const {copied} = this.state;
        const {name, background, moreUrl, showLink} = this.props;
        const isDarkColor = chroma(background).luminance() <= 0.05;
        const isLightColor = chroma(background).luminance() >= 0.5;
       
       
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <div style={{background: background}} className='ColorBox'>
            <div style ={{background}} className ={`copy-overlay  ${copied  &&"show"}`} />   
            <div className ={`copy-msg  ${copied  &&"show"}`}>
                <h1> Copied</h1>
                <p className= {{isLightColor} && 'dark-text'}>{this.props.background}</p>
            </div>
             
                <div className="copy-container">
                    <div className="box-content">
                        <span className ={isDarkColor && 'light-text'}>{name}</span> 
                    </div>
                    <button className="copy-button">
                    <span className ={isLightColor && 'dark-text'}> Copy</span>
                    </button>
                </div>
                {showLink && (
             <Link to= {moreUrl} onClick={e=> e.stopPropagation()} >
             <span className= {`see-more ${isLightColor && 'dark-text'}`}>More</span>
             
             </Link>
             )}
            </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;