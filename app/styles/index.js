import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

// https://reactnavigation.org/docs/navigators/tab#tabBarOptions-for-TabBarBottom-default-tab-bar-on-iOS
export const tabBarStyles = {
    activeTintColor: '#E7A7C7',
    activeBackgroundColor: '#FFF',
    inactiveTintColor: '#666',
    inactiveBackgroundColor: '#FFF',
    style: { // style of the whole bar
        backgroundColor: '#FFF',
    },
    labelStyle: { // style of the label part
        backgroundColor: '#EEE',
        // backgroundColor: '#F00',
    },
};

// stackNav is the main layout containing the whole app
// each screen is contained inside a stack
// so if you want to change the background of the all app, you could to do it here
// (but you could do it also in root)
export const stackNavStyles = {
    style: {
        // backgroundColor: '#FAF',
    },
    header: {
        // backgroundColor: '#F00',
    },
    headerTitle: {
        // backgroundColor: '#00F',
        // color: '#FF0',
    },
};

export default StyleSheet.create({
    // root is where everything is starting, it is the first element containing the app
    // this root element is then calling the stackNav layout
    root: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
});
