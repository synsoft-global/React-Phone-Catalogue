/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    // maxHeight: 485,
  },
  tableButton: {
    height: 20,
    width: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 24,
  },
  ButtonMargin: {
    margin: 2,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default function Login(props: any) {
  const { email: propsEmail, password: propsPassword } = props;
  const classes = useStyles();
  const [isLoginDisabled, setIsLoginDisabled] = React.useState(true);
  const [email, setEmail] = React.useState(propsEmail || '');
  const [password, setPassword] = React.useState(propsPassword || '');
  const [showPassword, setShowPassword] = React.useState(true);

  React.useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateEmail = (text) => /@/.test(text);

  const validateForm = () => {
    setIsLoginDisabled(password.length < 8 || !validateEmail(email));
  };

  const handleEmailBlur = (evt) => {
    const emailValue = evt.target.value.trim();
    setEmail(emailValue);
  };

  const handlePasswordChange = (evt) => {
    const passwordValue = evt.target.value.trim();
    setPassword(passwordValue);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    // dispatch('submit(email, password)'); dispatch
    setIsLoginDisabled(true);
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Paper className={classes.paper}>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={email}
              onChange={handleEmailBlur}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
            <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
          </FormControl>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
              labelWidth={70}
            />
          </FormControl>
          <input
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={isLoginDisabled}
            value="Submit"
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
