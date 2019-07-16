import { StyleSheet } from 'react-native';

import sharedStyles from '../Styles';
import { COLOR_BACKGROUND_LIST } from '../../constants/colors';

export default StyleSheet.create({
	list: {
		flex: 1,
		backgroundColor: COLOR_BACKGROUND_LIST
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
	}
});
