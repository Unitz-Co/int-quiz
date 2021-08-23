import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IconSVG} from '../assets/iconSvg';

const Header = ({title, renderButtonRight = () => {}, hideBackButton}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {!hideBackButton && (
          <TouchableOpacity style={styles.btnBack}>
            <IconSVG.ArrowLeft height={18} width={18} color={'red'} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {renderButtonRight()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  left: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  btnBack: {
    marginRight: 8,
  },
});

export default React.memo(Header);
