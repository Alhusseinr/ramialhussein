import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Gravatar from 'react-gravatar'
import {Link} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: "white",
    }
}));

export default function NavBar() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Gravatar email="ramialhussein98@gmail.com" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link href="/" className={classes.link}>Rami Alhussein</Link>
                    </Typography>
                    <Button color="inherit" href="/repos">Projects</Button>
                    <Button color="inherit" href="/resume">Resume</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
