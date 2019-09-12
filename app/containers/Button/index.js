import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { COLOR_BUTTON_PRIMARY, COLOR_BUTTON_PRIMARY_LOGIN, COLOR_BUTTON_SECONDARY,
         COLOR_BUTTON_SECONDARY_LOGIN, COLOR_BUTTON_TEXT_PRIMARY, COLOR_BUTTON_TEXT_PRIMARY_LOGIN,
         COLOR_BUTTON_TEXT_SECONDARY, COLOR_BUTTON_TEXT_SECONDARY_LOGIN, COLOR_BORDER
       } from '../../constants/colors';
import sharedStyles from '../../views/Styles';

const colors = {
	background_primary: COLOR_BUTTON_PRIMARY,
	background_primary_login: COLOR_BUTTON_PRIMARY_LOGIN,
	background_secondary: COLOR_BUTTON_SECONDARY, //white
	background_secondary_login: COLOR_BUTTON_SECONDARY_LOGIN,

	text_color_primary: COLOR_BUTTON_TEXT_PRIMARY, //white
	text_color_primary_login: COLOR_BUTTON_TEXT_PRIMARY_LOGIN,
	text_color_secondary: COLOR_BUTTON_TEXT_SECONDARY, //color primary
	text_color_secondary_login: COLOR_BUTTON_TEXT_SECONDARY_LOGIN
};

/* eslint-disable react-native/no-unused-styles */
const styles = StyleSheet.create({
    button: {
        borderRadius: 50, //FIXME all border radius should be same not a factor
        marginBottom: 10,
    },
	buttonContainer: {
		borderRadius: 50,
		borderWidth: 1,
		borderColor: COLOR_BORDER,
		width: '100%',
		height: 48,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 15
	},
	text: {
		fontSize: 18,
		textAlign: 'center'
	},
	background_primary: {
		backgroundColor: colors.background_primary
	},
    background_primary_login: {
        backgroundColor: colors.background_primary_login
    },
	background_secondary: {
		backgroundColor: colors.background_secondary
	},
	background_secondary_login: {
		backgroundColor: colors.background_secondary_login
	},
	text_primary: {
		...sharedStyles.textMedium,
		color: colors.text_color_primary
	},
    text_primary_login: {
        ...sharedStyles.textMedium,
        color: colors.text_color_primary_login
    },
	text_secondary: {
		...sharedStyles.textBold,
		color: colors.text_color_secondary
	},
	text_secondary_login: {
		...sharedStyles.textBold,
		color: colors.text_color_secondary_login
	},
	disabled: {
		backgroundColor: '#e1e5e8'
	}
});

export default class Button extends React.PureComponent {
	static propTypes = {
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
		type: PropTypes.string,
		onPress: PropTypes.func,
		disabled: PropTypes.bool,
		backgroundColor: PropTypes.string,
		loading: PropTypes.bool,
		style: PropTypes.any
	}

	static defaultProps = {
		title: 'Press me!',
		type: 'primary',
		onPress: () => alert('It works!'),
		disabled: false,
		loading: false
	}

	render() {
		const {
			title, type, onPress, disabled, backgroundColor, loading, style, ...otherProps
		} = this.props;
		return (
			<RectButton
				onPress={onPress}
				enabled={!(disabled || loading)}
				style={[
				    styles.button,
					backgroundColor ? { backgroundColor } : styles[`background_${ type }`],
					disabled && styles.disabled,
					style
				]}
				{...otherProps}
			>
			    <View style={styles.buttonContainer}>
                    {
                        loading
                            ? <ActivityIndicator color={colors[`text_color_${ type }`]} />
                            : <Text style={[styles.text, styles[`text_${ type }`]]}>{title}</Text>
                    }
                </View>
			</RectButton>
		);
	}
}
