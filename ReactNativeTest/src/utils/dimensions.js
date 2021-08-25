import {LANDSCAPE, PORTRAIT} from 'react-native-orientation-locker';

export const getOrientation = orientation => {
  if (orientation.includes(LANDSCAPE)) {
    return LANDSCAPE;
  } else if (orientation.includes(PORTRAIT)) {
    return PORTRAIT;
  }
};
