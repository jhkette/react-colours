import React, {Component} from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';


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
        const {name, background} = this.props;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <div style={{background: background}} className='ColorBox'>
            <div style ={{background}} className ={`copy-overlay  ${copied  &&"show"}`} />   
            <div className ={`copy-msg  ${copied  &&"show"}`}>
                <h1> Copied</h1>
                <p>{this.props.background}</p>
            </div>
             
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                        
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
             <span className="see-more">More</span>
            </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;