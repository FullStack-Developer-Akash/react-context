import React from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import Fun from './compount1';
import Nav from './nav';
import Main from './maincom';
import Footer from './footer';
import Greeting from './greeting';
import Propstutorial from './props';

///////
import Navcon from './components/nav';
import BookList from './components/booklist';
import ThemeContextProvider from './context/ThemeContext';
export default function App() {
  return (
    <div className="App">
      {/* <Fun/> */}
      {/* <Nav />
      <Main />
      <Footer /> */}
      {/* <Greeting name="Gayu" /> */}
      <ThemeContextProvider>
        <Navcon />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}
