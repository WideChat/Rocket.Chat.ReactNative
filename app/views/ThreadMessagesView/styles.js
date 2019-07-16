import { StyleSheet } from 'react-native';

import sharedStyles from '../Styles';
import {
    COLOR_BACKGROUND_CONTAINER_PRIMARY, COLOR_BACKGROUND_LIST, COLOR_SEPARATOR
} from '../../constants/colors';

export default StyleSheet.create({
	list: {
		flex: 1,
		backgroundColor: COLOR_BACKGROUND_CONTAINER_PRIMARY
	},
	listEmptyContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLOR_BACKGROUND_LIST
	},
	noDataFound: {
		fontSize: 14,
		...sharedStyles.textRegular,
		...sharedStyles.textColorNormal
	},
	contentContainer: {
		paddingBottom: 30
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		width: '100%',
		marginLeft: 60,
		marginTop: 10,
		backgroundColor: COLOR_SEPARATOR
	}
});
