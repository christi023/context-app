import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: false };

    //binding
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  // toggle method for switching isDarkMode in App Title
  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
