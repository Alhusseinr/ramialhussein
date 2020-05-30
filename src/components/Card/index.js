import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class SimpleCard extends React.Component{
    render() {
        const cards = this.props.items.map(item => {
            return (
                <Grid item key={item.id} xs={12} sm={4}>
                    <Paper elevation={2} className="root">
                        <Typography className="title">
                            <strong>Repository name:</strong> {item.name}
                        </Typography>

                        <Grid container style={{ marginTop: '1em '}}>
                            <Grid item sm={6} >
                                <Link variant="body2" target="_blank" href={item.html_url} style={{ marginTop: '.75em' }}>Go To Repo</Link>
                            </Grid>
                             <Grid item sm={6} >
                                Language: {item.language}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            );
        });

        return(
            <>
                {cards}
            </>
        )
    };
}

export default SimpleCard;
