import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        width: 400,
        height: 200,
        marginTop: 130,
        marginBottom: 10,
        marginleft: 20,
        paddingLeft: 10,
        marginRight: 20
    },

    title: {
        fontSize: 13,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(props) {
    const classes = useStyles();


    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <h4 align="center"> Temperature </h4>
                </Typography>
                <br></br>
                <Typography variant="body3" component="p">
                    <h4 align="center"><b> {props.tempvalue[0]}&#8451;</b></h4>
                </Typography>
            </CardContent>

        </Card>
    );
}
