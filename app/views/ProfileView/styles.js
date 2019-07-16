import { StyleSheet, Platform } from 'react-native';
import {
	COLOR_AVATAR_BUTTON, COLOR_DIALOG_INPUT
} from '../../constants/colors';
import { ICON_RADIUS_FACTOR } from '../../constants/icons';

export default StyleSheet.create({
	avatarContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10
	},
	avatarButtons: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	avatarButton: {
		backgroundColor: COLOR_AVATAR_BUTTON,
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 15,
		marginBottom: 15,
		borderRadius: 50 * ICON_RADIUS_FACTOR
	},
	dialogInput: Platform.select({
		ios: {},
		android: {
			borderRadius: 4,
			borderColor: COLOR_DIALOG_INPUT,
			borderWidth: 2,
			paddingHorizontal: 10
		}
	})
});

