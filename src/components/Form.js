import React, { Component } from "react";
import {
  Paper,
  Typography,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Avatar,
  Button,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/FormStyles";
class Form extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Sign In</Typography>
          <Select value="srp">
            <MenuItem value="srp">Srpski</MenuItem>
            <MenuItem value="eng">English</MenuItem>
            <MenuItem value="esp">Espanol</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" name="password" />
            </FormControl>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
            <Button
              className={classes.submitBtn}
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(Form);
