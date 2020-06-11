import React, { Component } from 'react';
// material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
// contexts
import { ThemeContext } from '../../contexts/ThemeContext';
import { withLanguageContext } from '../../contexts/LanguageContext';
// styles
import styles from '../../styles/NavBarStyles';

//
const content = {
  english: {
    search: 'Search',
    flag: '🇬🇦',
  },
  swedish: {
    search: '',
    flag: '🇸🇪',
  },
  spanish: {
    search: 'Buscar',
    flag: '🇪🇸',
  },
};

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    // console.log(this.context);
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    const { search, flag } = content[language];
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App Title
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
