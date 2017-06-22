import Expo, { Constants } from 'expo';
import React from 'react';
import { View } from 'react-native';

import cacheAssetsAsync from './app/lib/cacheAssetsAsync.helper';
import Wudo from './app/main';

export default class extends React.Component {
    state = {
        appIsReady: false,
    };

    componentWillMount() {
        this.loadAssetsAsync();
    }

    async loadAssetsAsync() {
        try {
            await cacheAssetsAsync({
                images: [
                    require('./assets/images/avatars/0.png'),
                    require('./assets/images/avatars/1.png'),
                    require('./assets/images/avatars/2.png'),
                    require('./assets/images/avatars/3.png'),
                    require('./assets/images/avatars/4.png'),
                ],
                fonts: [
                    // FontAwesome.font,
                    { 'Roboto_regular': require('./assets/fonts/Roboto-Regular.ttf') },
                    { 'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf') },
                ],
            });
        } catch (e) {
            console.warn(
              'There was an error caching assets (see: main.js), perhaps due to a ' +
                'network timeout, so we skipped caching. Reload the app to try again.'
            );
            console.log(e.message);
        } finally {
            this.setState({ appIsReady: true });
        }
    }

    render() {
        if (this.state.appIsReady) {
            return (
                <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                    <Wudo />
                </View>
            );
        }
        return <Expo.AppLoading />;
    }
}
