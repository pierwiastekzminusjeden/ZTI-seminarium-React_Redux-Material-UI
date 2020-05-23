import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setMessage} from "../actions/eventBus";
import {addTodo} from "../actions/todos";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

function AddNewForm(props) {
    const [note, setNote] = React.useState("");

    const onChangeNote = e => {
        setNote(e.target.value);
    };

    const onAddTodo = e => {
        if (!note) {
            props.setMessage("No new note in text field")
        } else {
            const id = props.lastId + 1;
            e.preventDefault();
            props.addTodo(note, id);
        }
    };

    return (
        <Box display="flex" flexDirection="row">
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth={true}
                    label="Todo"
                    type="text"
                    defaultValue={note}
                    onChange={onChangeNote}
                />
            <Box p={2} center="true">
                <Button onClick={onAddTodo}>Add todo</Button>
            </Box>
        </Box>
    );
}

AddNewForm.propTypes = {
    lastId: PropTypes.number.isRequired,
    addTodo: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    lastId: state.todos.lastId
});

export default connect(mapStateToProps, {addTodo, setMessage})(AddNewForm);