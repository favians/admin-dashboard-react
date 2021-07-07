import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

TextFields.propTypes = {
    model: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    width: PropTypes.number,
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));

export default function TextFields(props) {
    const { model, label, errorMessage, width } = props;    
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          error
          id="outlined-error-helper-text"
          label={label}
          helperText={errorMessage}
          variant="outlined"
        />
      </div>
    </form>
  );
}
