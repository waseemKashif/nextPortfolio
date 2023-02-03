import '../styles/globals.css'
import '../styles/navbarStyle.module.css'
import Layout from "../componets/Layout";
import { DarkModeContext } from './api/darkModeContext';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [darkMode,setDarkMode]=useState(false)

  return (
    
    
      <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
        <Layout>
        <Component {...pageProps} />
        </ Layout>
      </DarkModeContext.Provider>
  );
}
