/**
 * React Native App
 * Everything starts from the App
 */
import React from 'react';

import MainStack from '@navigations';

import {LoadingRoot} from '@components';

const App = () => {
  return (
    <>
      <MainStack />
      <LoadingRoot />
    </>
  );
};

export default App;
