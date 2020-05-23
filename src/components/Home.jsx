import React from 'react';
import TodoList from "./TodoList";
import EditDialogBox from "./EditDialogBox";
import AddNewForm from "./AddNewForm";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2, 1, 2, 1),
        margin: theme.spacing(10, 50, 10, 50),
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <React.Fragment>
        <Paper className={classes.root}>
            <AddNewForm/>
            <Divider/>
            <TodoList/>
            <EditDialogBox/>
        </Paper>
        </React.Fragment>
    )
};