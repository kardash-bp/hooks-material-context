import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/NavbarStyles";
import { ContextTheme } from "../contexts/ThemeContext";
import { withLanguageContext } from "../contexts/LanguageContext";
class Navbar extends Component {
  static contextType = ContextTheme;
  render() {
    const { languageContext } = this.props;
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar color={isDarkMode ? "default" : "primary"} position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit">
              TODOS WITH HOOKS
            </Typography>
            <div className={classes.grow} />{" "}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <IconButton className={classes.menuButton} color="inherit">
              <span>󠁧󠁢󠁥󠁮{languageContext.lang}</span>
            </IconButton>
            <Switch onChange={toggleTheme} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(withLanguageContext(Navbar));
