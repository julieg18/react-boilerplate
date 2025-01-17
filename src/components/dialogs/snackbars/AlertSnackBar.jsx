import React from 'react';
import {
  IconButton,
  Snackbar,
  SnackbarContent,
  Typography,
} from '@mui/material';
import {
  Info,
  Check,
} from '@mui/icons-material';

import useClasses from '@/components/layout/hooks/useClasses';

const styles = {
  root: {
    bottom: 64,
    opacity: 0.95,
    width: 'calc(100% - 16px)',
    maxWidth: 'var(--theme-breakpoints-values-sm)',
    boxSizing: 'border-box',
  },
  snackBar: {
    width: '100%',
    fontWeight: 'bold',
    flexWrap: 'nowrap',
  },
  okButton: {
    color: 'var(--theme-palette-success-contrastText)',
  },
  message: {
    display: 'inline-block',
    marginLeft: 15,
  },
  snackBarMessage: {
    display: 'flex',
    alignItems: 'center',
  },
};

const AlertSnackBar = ({
  open,
  text,
  onClose,
}) => {
  const classes = useClasses(styles);

  const closeSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose();
  };

  const action = (
    <>
      <IconButton className={classes.okButton} onClick={onClose} size="large">
        <Check />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={open}
      onClose={closeSnackBar}
      className={classes.root}
    >
      <SnackbarContent
        message={(
          <>
            <Info />
            <Typography className={classes.message}>{text}</Typography>
          </>
        )}
        className={classes.snackBar}
        classes={{
          message: classes.snackBarMessage,
        }}
        action={action}
      />
    </Snackbar>
  );
};

export default AlertSnackBar;
