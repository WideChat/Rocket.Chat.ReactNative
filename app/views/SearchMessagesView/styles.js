import { StyleSheet } from 'react-native';
import {
    COLOR_SEPARATOR, COLOR_BACKGROUND_LIST, COLOR_BACKGROUND_CONTAINER_PRIMARY
} from '../../constants/colors';

import sharedStyles from '../Styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR_BACKGROUND_CONTAINER_PRIMARY
	},
	searchContainer: {
		padding: 20,
		paddingBottom: 0
	},
	list: {
		flex: 1,
		backgroundColor: COLOR_BACKGROUND_LIST
	},
	divider: {
		width: '100%',
		height: StyleSheet.hairlineWidth,
		backgroundColor: COLOR_SEPARATOR,
		marginVertical: 20
	},
	listEmptyContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: COLOR_BACKGROUND_LIST
	},
	noDataFound: {
		fontSize: 14,
		...sharedStyles.textRegular,
		...sharedStyles.textColorNormal
	}
});
