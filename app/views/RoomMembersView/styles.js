import { StyleSheet } from 'react-native';
import { COLOR_SEPARATOR, COLOR_BACKGROUND_CONTAINER_PRIMARY } from '../../constants/colors';

export default StyleSheet.create({
	list: {
		flex: 1,
		backgroundColor: COLOR_BACKGROUND_CONTAINER_PRIMARY
	},
	item: {
		flexDirection: 'row',
		paddingVertical: 10,
		paddingHorizontal: 16,
		alignItems: 'center'
	},
	avatar: {
		marginRight: 16
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: COLOR_SEPARATOR,
		marginLeft: 60
	},
	loading: {
		flex: 1
	}
});