import React from 'react';
import { ThemeProvider } from 'styled-components'

import Dashboard from './pages/DashBoard';

import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/Layout'
import dark from './styles/themes/dark';
import List from './pages/List';


function App() {
  return (

    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List/>
        {/* <Dashboard /> */}
      </Layout>
    </ThemeProvider>


  );
}

export default App;
