import React from "react";
import { Parallax } from 'react-parallax';
import { makeStyles } from "@material-ui/core/styles";
import {Text} from "@react-pdf/renderer";

const useStyles = makeStyles({
    parallaxHeight: {
        height: '100em',
    },
    gitLink: {
        margin: '25em 0 0 21em',
        transform: [{ rotate: '90deg' }]
    }
});

function ParallaxCom (){
    const classes = useStyles();

    return(
        <Parallax bgImage={require('../../assets/parallex.jpg')} >
            <p className={classes.gitLink}>Go to git </p>
            <div className={classes.parallaxHeight} />
        </Parallax>
    );
}

export default ParallaxCom;
