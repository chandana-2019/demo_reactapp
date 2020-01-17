import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        width: 478,
        height: 323,
        marginTop: 30,
        marginBottom: 10,
        marginleft: 30,
        //paddingLeft: 30,
        marginRight: 20,
        alignContent: "center"
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



            <Card className={classes.card}>
                <CardContent align-items="center">
                    <h4 align="center">Temperature </h4>
                    <Typography class="temptext">

                        <h4 align="center"><b> {props.tempvalue[0]}&#8451;</b></h4>

                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
