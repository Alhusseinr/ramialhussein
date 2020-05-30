import React from 'react';
import Resume from '../assets/resume.png'
import Link from "@material-ui/core/Link";
import Alert from "@material-ui/lab/Alert";


class resume extends React.Component{
    render() {
        return(
            <div style={{ textAlign: 'center' }}>
                <Alert severity="success">Resume. Click <Link target="_blank" href="https://www.linkedin.com/in/rami-alhussein/">here</Link> to go to my LinkedIn page</Alert>
                <img src={Resume} style={{ width: '75%' }} alt={'Resume'} />
            </div>
        )
    }
}
export default resume;
