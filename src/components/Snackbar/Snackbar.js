import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { snackbarClose } from '../../redux/action';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [vertical] = useState('top');
  const [horizontal] = useState('center');
  const [Transition] = useState({
    Transition: Grow,
  });

  const open = useSelector((state) => state.Snackbar.open);
  const message = useSelector((state) => state.Snackbar.message);
  const severity = useSelector((state) => state.Snackbar.severity);

  const dispatch = useDispatch();

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(snackbarClose());
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        TransitionComponent={Transition.Transition}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
