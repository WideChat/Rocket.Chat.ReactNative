import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import StatusBar from '../containers/StatusBar';
import { isAndroid } from '../utils/deviceInfo';
import { LOADING_SCREEN_BACKGROUND } from '../constants/colors';
import { IS_LOADING_SCREEN_PNG, LOADING_SCREEN_PNG} from '../constants/icons';

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '100%'
	}
});

//FIXME: I'm not sure where this is shown
const getLaunchScreen = () => {
    if (IS_LOADING_SCREEN_PNG) {
        return <Image source={{ uri: LOADING_SCREEN_PNG }} style={styles.image} />
    } else {
        return <View style={{ backgroundColor: LOADING_SCREEN_BACKGROUND}} />
    }
}

export default React.memo(() => (
	<React.Fragment>
		<StatusBar />
		{isAndroid ? getLaunchScreen() : null}
	</React.Fragment>
));
