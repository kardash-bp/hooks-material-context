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
import { LangContext } from "../contexts/LanguageContext";
const diffLang = {
  sr: ["Prijava", "Zapamti me"],
  en: ["Log in", "Remember Me"],
  es: ["Acceso", "Recuérdame"],
};
class Form extends Component {
  static contextType = LangContext;
  render() {
    const { classes } = this.props;
    const { lang, changeLang } = this.context;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">{diffLang[lang][0]}</Typography>
          <Select value={lang} onChange={(e) => changeLang(e.target.value)}>
            <MenuItem value="sr">Srpski</MenuItem>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Espanol</MenuItem>
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
            <FormControlLabel
              control={<Checkbox />}
              label={diffLang[lang][1]}
            />
            <Button
              className={classes.submitBtn}
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              {diffLang[lang][0]}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(Form);
