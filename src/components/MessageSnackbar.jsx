import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from "prop-types";

function MessageSnackbar(props) {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');

    useEffect(() => {
        setMessage(props.message);
        if (props.message !== null)
            setOpen(true);
    }, [props.message]);

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            autoHideDuration={10000}
            onClose={onClose}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={message}
        />
    );
}

MessageSnackbar.propTypes = {
    message: PropTypes.string,
};

const mapStateToProps = state => ({
    message: state.messages.message,
});

export default connect(mapStateToProps, {})(MessageSnackbar);