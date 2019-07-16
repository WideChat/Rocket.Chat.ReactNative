import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import I18n from '../i18n';
import { isIOS } from '../utils/deviceInfo';
import { CustomIcon } from '../lib/Icons';
import sharedStyles from '../views/Styles';
import { COLOR_SEARCHBOX_CONTAINER, COLOR_SEARCHBOX_BACKGROUND, COLOR_SEARCHBOX_TEXT } from '../constants/colors';

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLOR_SEARCHBOX_CONTAINER
	},
	searchBox: {
		alignItems: 'center',
		backgroundColor: COLOR_SEARCHBOX_BACKGROUND,
		borderRadius: 10,
		color: COLOR_SEARCHBOX_TEXT,
		flexDirection: 'row',
		fontSize: 17,
		height: 36,
		margin: 16,
		marginVertical: 10,
		paddingHorizontal: 10
	},
	input: {
		color: COLOR_SEARCHBOX_TEXT,
		flex: 1,
		fontSize: 17,
		marginLeft: 8,
		paddingTop: 0,
		paddingBottom: 0,
		...sharedStyles.textRegular
	}
});

const SearchBox = ({ onChangeText, testID }) => (
	<View style={styles.container}>
		<View style={styles.searchBox}>
			<CustomIcon name='magnifier' size={14} color={COLOR_SEARCHBOX_TEXT} />
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				blurOnSubmit
				clearButtonMode='while-editing'
				placeholder={I18n.t('Search')}
				returnKeyType='search'
				style={styles.input}
				testID={testID}
				underlineColorAndroid='transparent'
				onChangeText={onChangeText}
			/>
		</View>
	</View>
);

SearchBox.propTypes = {
	onChangeText: PropTypes.func.isRequired,
	testID: PropTypes.string
};

export default SearchBox;
