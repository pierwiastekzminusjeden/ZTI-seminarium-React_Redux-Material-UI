import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTodos} from "../actions/todos";
import {setOpen} from "../actions/eventBus";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles(theme => ({
    avatar: {
        padding: theme.spacing(2, 2, 2, 2),
        background: '#606be2',
        borderRadius: 0,
        width: '97%'
    },
    row: {
        '&:hover': {background: '#606be2'}
    }
}));


function TodoList(props) {
    const classes = useStyles();

    useEffect(() => {
        props.getTodos();
    }, []);

    const onClickRow = note => e => {
        e.preventDefault();
        props.setOpen(true, note);
    };

    return (
        <Table>
            <TableBody>
                {props.todos.map(price => (
                    <TableRow key={price.id} className={classes.row} onClick={onClickRow(price)}>
                        <TableCell align="center">{price.title}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    setOpen: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    todos: state.todos.todos,
});

export default connect(mapStateToProps, {getTodos, setOpen})(TodoList);