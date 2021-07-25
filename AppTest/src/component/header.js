import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { styles } from '../util/styles';


export default function Header({
	setSearch,
	setView,
	total,
	setStatus,
															 }) {
	const [searchString, setSearchString] = useState('');
	const [watchType, setWatchType] = useState(1);
	const [isStatus, setIsStatus] = useState('');
	const status = [
		{
			status: '',
			value: 'Tất cả'
		},
		{
			status: 'online',
			value: 'Online',
		},
		{
			status: 'offline',
			value: 'Offline',
		},
	];
	const watch = [
		{
			id: 1,
			value: 'Dọc'
		},
		{
			id: 2,
			value: 'Ngang'
		},
	]
	const onSearch = useCallback(() => {
		setSearch(searchString);
		setView(watchType);
		setStatus(isStatus);
	},[searchString,watchType, isStatus])
	return <View style={styles.header}>
		<View style={{paddingHorizontal: 16}}>
			<Text style={styles.title}>Tìm theo tên hoặc danh mục</Text>
			<TextInput
				value={searchString}
				onChangeText={setSearchString}
				style={styles.input}
				placeholder={'Nhập từ khóa'}
				placeholderTextColor={'#888'}
			/>
			<Text style={[styles.title, {marginTop: 8}]}>Trạng thái hoạt động</Text>
			<SelectDropdown
				defaultValueByIndex={0}
				buttonStyle={styles.dropdown}
				data={status}
				onSelect={(selectedItem) => {
					setIsStatus(selectedItem?.status)
				}}
				buttonTextAfterSelection={(selectedItem) => {
					return selectedItem.value
				}}
				rowTextForSelection={(item) => {
					return item.value
				}}
			/>
			<Text style={[styles.title, {marginTop: 8}]}>Chế độ xem</Text>
			<SelectDropdown
				defaultValueByIndex={0}
				buttonStyle={styles.dropdown}
				data={watch}
				onSelect={(selectedItem) => {
					setWatchType(selectedItem?.id)
				}}
				buttonTextAfterSelection={(selectedItem) => {
					return selectedItem?.value
				}}
				rowTextForSelection={(item) => {
					return item?.value
				}}
			/>
			<TouchableOpacity onPress={onSearch} style={styles.searchButton}>
				<Text style={styles.title}>Tìm</Text>
			</TouchableOpacity>
			<Text style={[styles.title, {marginTop: 8}]}>Danh sách {total || 0} người</Text>
		</View>
	</View>;
}
