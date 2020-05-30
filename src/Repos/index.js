import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import Card from '../components/Card/index';


class Repos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            card: []
        }
    }

    getRepos() {
        fetch('https://api.github.com/users/Alhusseinr/repos', {  method: "GET" })
            .then(response => response.json())
            .then(card => this.setState({ card }))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.getRepos();
    }


    render() {
        return(
            <div>
                <div className="Grid" spacing={3}>
                    <Alert severity="success">GitHub Repositories. Click <Link target="_blank" href="https://github.com/Alhusseinr">here</Link> to go to my github page</Alert>
                    <Grid container style={{ marginBottom: 100 }}>
                        <Card items={this.state.card} />
                    </Grid>
                </div>
            </div>
        )
    }
}
export default Repos;
