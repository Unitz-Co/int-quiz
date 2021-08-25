/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigation from './src/routers';
import Orientation from 'react-native-orientation-locker';
import {ContextApp} from './src/constant/App';
import {getOrientation} from './src/utils/dimensions';

const App: () => Node = () => {
  const [dataContext, setDataContext] = React.useState({
    orientation: getOrientation(Orientation.getInitialOrientation()),
  });

  React.useEffect(() => {
    const addOrientationListener = orientation => {
      setDataContext({
        orientation: getOrientation(orientation),
      });
    };
    Orientation.addOrientationListener(addOrientationListener);

    return () => {
      Orientation.removeOrientationListener(addOrientationListener);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ContextApp.Provider value={dataContext}>
        <RootNavigation />
      </ContextApp.Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
