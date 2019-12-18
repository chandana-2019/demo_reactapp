import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        width: 350,
        height: 200,
        marginTop: 80,
        marginBottom: 10,
        marginleft: 30,
        paddingLeft: 70,
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
        <div class="container">

            <h4 align="center">Temperature </h4>

            <Card className={classes.card}>
                <CardContent align-items="center">
                    <Typography >
                        <h4 align="center"><b> {props.tempvalue[4]}&#8451;</b></h4>
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
}
