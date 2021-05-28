import React, { useEffect } from 'react';
import { Modal, StyleSheet, View, ActivityIndicator } from 'react-native';

const LoadingRoot = () => {
  // const dispatch = useDispatch();
  // const { isLoadingRoot } = useSelector((state) => state.loading);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(app.stopLoading());
  //   }, 5000);
  // }, [isLoadingRoot]);

  return (
    <Modal visible={false} transparent>
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#FFF'} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});

export default LoadingRoot;
