import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteTodo, updateTodo} from "../actions/todos";
import {setMessage, setOpen} from "../actions/eventBus";
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    avatar: {
        padding: theme.spacing(2, 2, 2, 2),
        background: '#606be2',
        borderRadius: 0,
        width: '97%'
    },
}));

function EditDialogBox(props) {
    const classes = useStyles();
    const [note, setNote] = React.useState("");

    const onEditTodo = e => {
        if (!note) {
         props.setMessage("No new note in text field")
        } else {
            props.updateTodo(props.noteToUpdate.id, note);
            props.setOpen(false, note);
        }
    };

    const onCloseDialogBox = e => {
        props.setOpen(false, note);
    };

    const onChangeNote = e => {
        setNote(e.target.value);
    };

    const onDeleteTodo = id => e => {
        props.deleteTodo(id);
        props.setOpen(false, note);
    };

    return (
        <Dialog open={props.open} onClose={onCloseDialogBox}>
            <DialogTitle>
                <Avatar aria-label="recipe" className={classes.avatar}>
                    <Typography variant="h5">Edit Todo</Typography>
                </Avatar>
            </DialogTitle>
            <DialogContent>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Todo"
                    type="text"
                    defaultValue={props.noteToUpdate.title}
                    autoFocus
                    onChange={onChangeNote}
                />
                <Button
                    onClick={onEditTodo}
                    color="primary">
                    Update todo
                </Button>
                <Button onClick={onDeleteTodo(props.noteToUpdate.id)}>Delete todo:
                    {props.noteToUpdate.title}
                </Button>
                <Button onClick={onCloseDialogBox}>
                    <Avatar aria-label="recipe" style={{background: '#606be2'}}>
                        <CloseIcon/>
                    </Avatar>
                </Button>
            </DialogContent>
        </Dialog>
    );
}

EditDialogBox.propTypes = {
    noteToUpdate: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    setOpen: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    noteToUpdate: state.eventBus.note,
    open: state.eventBus.open
});

export default connect(mapStateToProps, {deleteTodo, updateTodo, setOpen, setMessage})(EditDialogBox);