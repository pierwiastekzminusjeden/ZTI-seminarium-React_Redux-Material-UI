import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    avatar: {
        padding: theme.spacing(2, 2, 2, 2),
        background: '#606be2',
        borderRadius: 0,
        width: '97%'
    },
}));

export default function Header() {
    const classes = useStyles();

    return(
        <Avatar aria-label="recipe" className={classes.avatar}>
            <Typography variant="h4" className={classes.text}>Todos</Typography>
        </Avatar>
    )
}