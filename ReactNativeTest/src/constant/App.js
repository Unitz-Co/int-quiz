import React from 'react';
import Orientation from 'react-native-orientation-locker';
import {getOrientation} from '../utils/dimensions';

export const ContextApp = React.createContext({
  orientation: getOrientation(Orientation.getInitialOrientation()),
});
