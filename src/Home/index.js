import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Jumbo from '../assets/jumbo2.jpg';
//Fonts: Roboto Slab or Proxima Nova. Missing period.
export default class Home extends React.Component{
    render() {
        return (
            <h1>Will be back up soon, redesign on its way</h1>
            // <Grid container style={{ marginBottom: 55 }}>
            //     <Grid item sm={12} md={12}>
            //         <Paper elevation={3} style={{
            //             paddingRight: 25, paddingLeft: 25,
            //             paddingTop: 10, paddingBottom: 10, borderRadius: 0, textAlign: 'left',
            //             background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${Jumbo})`, color: 'white',
            //             backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: 'center'
            //         }} >
            //             <h1>Hi There!</h1>
            //             <br />
            //             <h1>My name is Rami Alhussein.</h1>
            //             <br />
            //             <h1>I am a Software Engineer based in NJ/NY.</h1>
            //         </Paper>
            //     </Grid>
            //     <Grid item sm={12} style={{ textAlign: 'center', margin: 'auto' }}>
            //         <h1 style={{ paddingLeft: 20, paddingRight: 20 }}>My Top Projects</h1>
            //     </Grid>
            //     <Grid item sm={12} md={4}>
            //         <Paper elevation={3} style={{ padding: 20, margin: 15, textAlign: 'left' }}>
            //             <h2>HawkScan</h2>
            //             <h4>A check-in system for Montclair State University's hackathon (<a href='https://www.hawkhack.io' rel='noopener noreferrer' target='_blank'>HawkHack</a>). Built using: </h4>
            //             <div>
            //                 <ul style={{ listStyle: "none" }}>
            //                     <li style={{ marginBottom: 5 }}>
            //                         React-native.js
            //                     </li>
            //                     <li style={{ marginBottom: 5 }}>
            //                         Material-ui
            //                     </li>
            //                     <li style={{ marginBottom: 5 }}>
            //                         Expo Barcode Scanner
            //                     </li>
            //                     <li style={{ marginBottom: 5, color: 'white' }}>
            //                         Expo Barcode Scanner
            //                     </li>
            //                 </ul>
            //             </div>
            //         </Paper>
            //     </Grid>
            //     <Grid item sm={12} md={4}>
            //         <Paper elevation={3} style={{ padding: 20, margin: 15, textAlign: 'left'  }}>
            //             <h2>Restaurant Automation </h2>
            //             <h4>A restaurant system that facilitates the use of hand-written data from restaurants. Built using: </h4>
            //             <div>
            //                 <ul style={{ listStyle: "none" }}>
            //                     <li style={{ marginBottom: 5 }}>
            //                         React.js
            //                     </li>
            //                     <li style={{ marginBottom: 5 }}>
            //                         Node.js
            //                     </li>
            //                     <li style={{ marginBottom: 5 }}>
            //                         PostgreSql
            //                     </li>
            //                     <li style={{ marginBottom: 5 }}>
            //                         Material-ui
            //                     </li>
            //                 </ul>
            //             </div>
            //         </Paper>
            //     </Grid>
            //     <Grid item sm={12} md={4}>
            //         <Paper elevation={3} style={{ padding: 20, margin: 15, textAlign: 'left' }}>
            //             <h2>Tax Application</h2>
            //             <h4>An online tax application for <a href='https://www.rapidtax.com/'>Rapidtax</a> <a href='https://www.priortax.com/'>Priortax</a> and <a href='https://www.rapidrefund.net/'>Rapidrefund</a>. Built using: </h4>
            //             <div>
            //                 <ul style={{ listStyle: "none" }}>
            //                     <li style={{ marginBottom: 5 }}>
            //                         C#
            //                     </li>
            //                     <li style={{ marginBottom: 5 }}>
            //                         .NET
            //                     </li>
            //                     <li style={{ marginBottom: 5 }}>
            //                         SQL
            //                     </li>
            //                     <li style={{ marginBottom: 5 }}>
            //                         Bootstrap
            //                     </li>
            //                 </ul>
            //             </div>
            //         </Paper>
            //     </Grid>
            // </Grid>
        );
    }
}
