import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";

export default function Footer() {
    return (
        <AppBar position="static" color="primary" style={{ position: 'fixed', bottom: 0 }}>
                <Toolbar>
                    <Typography variant="body1" color="inherit">
                        &copy; Copyright, 2019 - 2020 RamiAlhussein.com, All Rights Reserved
                    </Typography>
                </Toolbar>
        </AppBar>
    )
}
