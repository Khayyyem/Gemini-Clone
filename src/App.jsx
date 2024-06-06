import React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/gemini_icon.png" />
        <title>Gemini Clone</title>
      </Helmet>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
