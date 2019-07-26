import React from 'react'
import { withStyles } from '@material-ui/styles';

const styles = {
    main: {
        backgroundColor: "purple",
        border: "3px solid teal",

    },
    secondary:{
        backgroundColor: "pink",
        "& h1": {
            color: "white"
        }
    }
}

function MiniPalette(props){
    const {classes} = props;
    console.log(classes)
    return(
        
        <div className={classes.main}>
        <p>Mini palette</p>
            <section className={classes.secondary}>
            <p>Mini palette</p>
            </section>
        </div>
    )
}

export default withStyles(styles) (MiniPalette);