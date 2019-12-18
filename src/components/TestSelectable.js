import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [dev_eui, setAge] = React.useState('');

    const inputLabel = React.useRef(null);
    /*
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    */

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <div>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Device EUI</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={dev_eui}
                    onChange={handleChange}
                >
                    <MenuItem value={'ce74b3a51b94c76b'}>ce74b3a51b94c76b</MenuItem>
                    <MenuItem value={'b7c9e27d3035cdb'}>b7c9e27d3035cdb5</MenuItem>
                    <MenuItem value={'d9ad826ed6e99f58'}>d9ad826ed6e99f58</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>



        </div>
    );
}
