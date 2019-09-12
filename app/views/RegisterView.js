import React from 'react';
import PropTypes from 'prop-types';
import {
	Keyboard, Text, ScrollView, Alert, StyleSheet, View
} from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';

import TextInput from '../containers/TextInput';
import Button from '../containers/Button';
import KeyboardView from '../presentation/KeyboardView';
import sharedStyles from './Styles';
import scrollPersistTaps from '../utils/scrollPersistTaps';
import LoggedView from './View';
import I18n from '../i18n';
import RocketChat from '../lib/rocketchat';
import { loginRequest as loginRequestAction } from '../actions/login';
import isValidEmail from '../utils/isValidEmail';
import { LegalButton } from '../containers/HeaderButton';
import StatusBar from '../containers/StatusBar';
import { COLOR_WHITE, COLOR_LOGIN_TEXT, COLOR_LOGIN_BACKGROUND_GRADIENT_START,
         COLOR_LOGIN_BACKGROUND_GRADIENT_END, COLOR_LOGIN_CONTAINER_BACKGROUND,
         COLOR_LOGIN_TEXT_BACKGROUND, COLOR_LOGIN_TEXT_BORDER} from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_LOGIN_CONTAINER_BACKGROUND,
        flex: 1
    },
    input: {
        ...sharedStyles.textRegular,
        color: COLOR_LOGIN_TEXT,
        height: 48,
        fontSize: 16,
        paddingLeft: 14,
        paddingRight: 14,
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: COLOR_LOGIN_TEXT_BACKGROUND,
        borderColor: COLOR_LOGIN_TEXT_BORDER
    },
    inputIcon: {
        color: COLOR_LOGIN_TEXT
    },
    inputPassword: {
        color: COLOR_LOGIN_TEXT
    }
});

const shouldUpdateState = ['name', 'email', 'password', 'username', 'saving'];

@connect(null, dispatch => ({
	loginRequest: params => dispatch(loginRequestAction(params))
}))
/** @extends React.Component */
export default class RegisterView extends LoggedView {
	static navigationOptions = ({ navigation }) => {
		const title = navigation.getParam('title', 'Rocket.Chat');
		return {
			title,
			headerRight: <LegalButton testID='register-view-more' navigation={navigation} />
		};
	}

	static propTypes = {
		navigation: PropTypes.object,
		loginRequest: PropTypes.func,
		Site_Name: PropTypes.string
	}

	constructor(props) {
		super('RegisterView', props);
		this.state = {
			name: '',
			email: '',
			password: '',
			username: '',
			saving: false
		};
	}

	componentDidMount() {
		this.timeout = setTimeout(() => {
			this.nameInput.focus();
		}, 600);
	}

	shouldComponentUpdate(nextProps, nextState) {
		// eslint-disable-next-line react/destructuring-assignment
		return shouldUpdateState.some(key => nextState[key] !== this.state[key]);
	}

	componentDidUpdate(prevProps) {
		const { Site_Name } = this.props;
		if (Site_Name && prevProps.Site_Name !== Site_Name) {
			this.setTitle(Site_Name);
		}
	}

	componentWillUnmount() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	}

	setTitle = (title) => {
		const { navigation } = this.props;
		navigation.setParams({ title });
	}

	valid = () => {
		const {
			name, email, password, username
		} = this.state;
		return name.trim() && email.trim() && password.trim() && username.trim() && isValidEmail(email);
	}

	submit = async() => {
		if (!this.valid()) {
			return;
		}
		this.setState({ saving: true });
		Keyboard.dismiss();

		const {
			name, email, password, username
		} = this.state;
		const { loginRequest } = this.props;

		try {
			await RocketChat.register({
				name, email, pass: password, username
			});
			await loginRequest({ user: email, password });
		} catch (e) {
			Alert.alert(I18n.t('Oops'), e.data.error);
		}
		this.setState({ saving: false });
	}

	render() {
		const { saving } = this.state;
		return (
			<KeyboardView contentContainerStyle={sharedStyles.container}>
				<StatusBar />
                <View style={{flex:1,justifyContent:'center'}}>
                <LinearGradient colors={[COLOR_LOGIN_BACKGROUND_GRADIENT_START,
                                         COLOR_LOGIN_BACKGROUND_GRADIENT_END]}
                                                   style={{ flex: 1 }}
                                                   start={{x: 0, y: 0}}
                                                   end={{x: 0, y: 1}}>
				<ScrollView {...scrollPersistTaps} contentContainerStyle={sharedStyles.containerScrollView}>
					<SafeAreaView style={styles.container} testID='register-view' forceInset={{ bottom: 'never' }}>
						<Text style={[sharedStyles.loginTitle, sharedStyles.textBold]}>{I18n.t('Sign_Up')}</Text>
						<TextInput
							inputRef={(e) => { this.nameInput = e; }}
							placeholder={I18n.t('Name')}
							returnKeyType='next'
							iconLeft='user'
							onChangeText={name => this.setState({ name })}
							onSubmitEditing={() => { this.usernameInput.focus(); }}
							testID='register-view-name'
                            styleIcon={styles.inputIcon}
                            stylePlaceHolderText={COLOR_LOGIN_TEXT}
                            styleInput={styles.input}
                            stylePassword={styles.inputPassword}
						/>
						<TextInput
							inputRef={(e) => { this.usernameInput = e; }}
							placeholder={I18n.t('Username')}
							returnKeyType='next'
							iconLeft='at'
							onChangeText={username => this.setState({ username })}
							onSubmitEditing={() => { this.emailInput.focus(); }}
							testID='register-view-username'
                            styleIcon={styles.inputIcon}
                            stylePlaceHolderText={COLOR_LOGIN_TEXT}
                            styleInput={styles.input}
                            stylePassword={styles.inputPassword}
						/>
						<TextInput
							inputRef={(e) => { this.emailInput = e; }}
							placeholder={I18n.t('Email')}
							returnKeyType='next'
							keyboardType='email-address'
							iconLeft='mail'
							onChangeText={email => this.setState({ email })}
							onSubmitEditing={() => { this.passwordInput.focus(); }}
							testID='register-view-email'
                            styleIcon={styles.inputIcon}
                            stylePlaceHolderText={COLOR_LOGIN_TEXT}
                            styleInput={styles.input}
                            stylePassword={styles.inputPassword}
						/>
						<TextInput
							inputRef={(e) => { this.passwordInput = e; }}
							placeholder={I18n.t('Password')}
							returnKeyType='send'
							iconLeft='key'
							secureTextEntry
							onChangeText={value => this.setState({ password: value })}
							onSubmitEditing={this.submit}
							testID='register-view-password'
							containerStyle={sharedStyles.inputLastChild}
                            styleIcon={styles.inputIcon}
                            stylePlaceHolderText={COLOR_LOGIN_TEXT}
                            styleInput={styles.input}
                            stylePassword={styles.inputPassword}
						/>

						<Button
							title={I18n.t('Register')}
							type='primary_login'
							onPress={this.submit}
							testID='register-view-submit'
							disabled={!this.valid()}
							loading={saving}
						/>
					</SafeAreaView>
				</ScrollView>
                </LinearGradient>
                </View>
			</KeyboardView>
		);
	}
}
