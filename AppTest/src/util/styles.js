import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	header: {
		width: '100%',
		backgroundColor: '#fff',
		paddingBottom: 8,
	},
	body: {
		flex: 1,
		paddingHorizontal: 8,
	},
	horizontalView: {
		flex: 1,
		flexDirection: 'row',
		paddingRight: 8,
	},
	verticalView: {
		flex: 1,
	},
	wrapperStyle: {
		flex: 1,
		marginLeft: 8,
		justifyContent: 'space-between'
	},
	infoStyle: {
		marginTop: 5,
		backgroundColor: 'white',
		borderRadius: 16,
		borderWidth: 3,
		paddingVertical: 16,
		paddingHorizontal: 8,
		borderColor: '#ccc'
	},
	headerInfo: {
		flexDirection: 'row'
	},
	bodyInfo: {
		flex: 1,
		borderTopWidth: 1,
		marginTop: 8,
		borderColor: '#ccc'
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#222'
	},
	field: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#222'
	},
	label: {
		fontSize: 14,
		color: '#222'
	},
	notLabel: {
		fontSize: 14,
		fontStyle: 'italic',
		color: '#888'
	},
	searchButton: {
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#888',
		width: '100%',
		height: 40,
		marginTop: 8,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		borderWidth: 1,
		paddingVertical: 0,
		height: 40,
		borderRadius: 8,
		color: '#222',
		paddingHorizontal: 8,
	},
	dropdown: {
		width: '100%',
		marginTop: 8,
		borderRadius: 8,
		borderWidth: 1,
		height: 40,
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 40,
	}
});
