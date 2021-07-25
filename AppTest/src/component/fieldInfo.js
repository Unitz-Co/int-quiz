import React from 'react';
import { View, Text, } from 'react-native';
import { styles } from '../util/styles';

export default function FieldInfo({field, value}) {
	return <View style={{flexDirection: 'row'}}>
		<Text style={[{width: 50}, styles.field]}>{field}</Text>
		<Text style={[styles.label, !value && styles.notLabel]}>{value || 'Không có'}</Text>
	</View>;
}
