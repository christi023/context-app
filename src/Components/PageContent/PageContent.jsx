import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? 'red' : 'black',
    height: '120vh',
    width: '100vw',
  };

  return <div style={styles}>{props.children}</div>;
}
