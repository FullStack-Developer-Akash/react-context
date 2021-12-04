import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isdarktheme: true,
    light: {
      syntax: '#555',
      ui: '#ddd',
      bg: '#eee',
    },
    dark: {
      syntax: '#ddd',
      ui: '#333',
      bg: '#555',
    },
  };
  render() {
    return (
      <ThemeContextProvider value={{ ...this.state }}></ThemeContextProvider>
    );
  }
}
export default ThemeContextProvider;
