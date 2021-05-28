import * as React from 'react';
// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef();

function navigate(name, params = null) {
  navigationRef.current?.navigate(name, params);
}

function back() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  back,
};
