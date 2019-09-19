import { StyleSheet } from 'react-native';
import { isIOS } from '../../utils/deviceInfo';
import {
	COLOR_SEPARATOR, COLOR_TEXT, COLOR_PRIMARY, COLOR_TEXT_DESCRIPTION,
	COLOR_BACKGROUND_CONTAINER_PRIMARY, COLOR_BACKGROUND_LIST, COLOR_DROPDOWN_CONTAINER_HEADER,
	COLOR_WHITE, HEADER_BACK, COLOR_GROUP_TITLE_CONTAINER, COLOR_GROUP_TITLE, COLOR_GROUP_SORT_ICON,
	COLOR_TEXT_HEADER, COLOR_SEARCHBOX_BACKGROUND, COLOR_ROOMS_ACTION_BUTTON,
	COLOR_GROUP_SORT_ICON_HEADER, COLOR_TEXT_DROPDOWN_CONTAINER
} from '../../constants/colors';
import { ICON_RADIUS_FACTOR } from '../../constants/icons';

import sharedStyles from '../Styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR_BACKGROUND_CONTAINER_PRIMARY
	},
	list: {
		width: '100%',
		backgroundColor: COLOR_BACKGROUND_LIST
	},
	actionButtonIcon: {
		fontSize: 40,
		height: 22,
		color: COLOR_ROOMS_ACTION_BUTTON
	},
	loading: {
		flex: 1
	},
	dropdownContainerHeader: {
		height: 41,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: COLOR_SEPARATOR,
		alignItems: 'center',
		backgroundColor: COLOR_DROPDOWN_CONTAINER_HEADER,
		flexDirection: 'row'
	},
	sortToggleContainerClose: {
		position: 'absolute',
		top: 0,
		width: '100%'
	},
	sortToggleText: {
		fontSize: 15,
		flex: 1,
		marginLeft: 15,
		color: COLOR_TEXT_DROPDOWN_CONTAINER,
		...sharedStyles.textRegular
	},
	dropdownContainer: {
		backgroundColor: COLOR_BACKGROUND_CONTAINER_PRIMARY,
		width: '100%',
		position: 'absolute',
		top: 0
	},
	sortItemButton: {
		height: 57,
		justifyContent: 'center'
	},
	sortItemContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	sortItemText: {
		fontSize: 18,
		flex: 1,
		...sharedStyles.textColorNormal,
		...sharedStyles.textRegular
	},
	backdrop: {
		...StyleSheet.absoluteFill,
		backgroundColor: '#000000'
	},
	sortSeparator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: COLOR_SEPARATOR,
		marginHorizontal: 15,
		flex: 1
	},
	sortIcon: {
		width: 22,
		height: 22,
		marginHorizontal: 15,
		color: COLOR_GROUP_SORT_ICON
	},
    sortIconHeader: {
        width: 22,
        height: 22,
        marginHorizontal: 15,
        color: COLOR_GROUP_SORT_ICON_HEADER
    },
	groupTitleContainer: {
		paddingHorizontal: 15,
		paddingTop: 17,
		paddingBottom: 10,
		backgroundColor: COLOR_GROUP_TITLE_CONTAINER
	},
	groupTitle: {
		color: COLOR_GROUP_TITLE,
		fontSize: isIOS ? 22 : 15,
		letterSpacing: 0.27,
		flex: 1,
		lineHeight: isIOS ? 41 : 24,
		...sharedStyles.textBold
	},
	serverHeader: {
		justifyContent: 'space-between'
	},
	serverHeaderText: {
		fontSize: 15,
		marginLeft: 15,
		color: COLOR_TEXT_HEADER,
		...sharedStyles.textRegular
	},
	serverHeaderAdd: {
		color: HEADER_BACK,
		fontSize: 15,
		marginRight: 15,
		paddingVertical: 10,
		...sharedStyles.textRegular
	},
	serverItem: {
		height: 68
	},
	serverItemContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	serverIcon: {
		width: 42,
		height: 42,
		marginHorizontal: 15,
		marginVertical: 13,
		borderRadius: 4,
		resizeMode: 'contain'
	},
	serverTextContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	serverName: {
		fontSize: 18,
		...sharedStyles.textColorNormal,
		...sharedStyles.textSemibold
	},
	serverUrl: {
		fontSize: 15,
		...sharedStyles.textColorDescription,
		...sharedStyles.textRegular
	},
	checkIcon: {
		marginHorizontal: 15,
		color: COLOR_PRIMARY
	},
	serverSeparator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: COLOR_SEPARATOR,
		marginLeft: 72
	}
});
