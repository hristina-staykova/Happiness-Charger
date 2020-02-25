import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { Link } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);

    //we have to fix the navbar so when we click on the next tab it changes properly. Tony said he would help with this.

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs


                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >


                <Link
                    to="/"
                    className={
                        window.location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                >
                    <Tab label="Home" />
                </Link>
                <Link
                    to="/gratitude"
                    className={
                        window.location.pathname === "/gratitude"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    <Tab label="Gratitude" />
                </Link>

                <Link
                    to="/inspiration"
                    className={
                        window.location.pathname === "/inspiration"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    <Tab label="Inspiration" />
                </Link>


            </Tabs>
        </Paper>
    );
}
