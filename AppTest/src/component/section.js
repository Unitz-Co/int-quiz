import React from 'react';
import { View, Text, } from 'react-native';
import { styles } from '../util/styles';

export default function Section({title, data, field}) {
	return <View style={styles.bodyInfo}>
		<Text style={styles.title}>{title}</Text>
		{
			data?.length < 1 && <Text style={styles.notLabel}>Không có</Text>
		}
		{
			data?.map((item, index) => {
				return <View key={index}>
					<Text style={styles.label}>● {item?.[field]}</Text>
				</View>
			})
		}
	</View>;
}
