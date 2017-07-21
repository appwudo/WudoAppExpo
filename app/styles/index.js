import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

// https://reactnavigation.org/docs/navigators/tab#tabBarOptions-for-TabBarBottom-default-tab-bar-on-iOS
export const tabBarStyles = {
    activeTintColor: '#FFA300',
    activeBackgroundColor: '#FFF',
    inactiveTintColor: '#6B757C',
    inactiveBackgroundColor: '#FFF',
    style: { // style of the whole bar
        backgroundColor: '#FFF',
    },
    labelStyle: { // style of the label part
        backgroundColor: '#FFF',
        fontFamily: 'Poppins_medium',
    },
};

// stackNav is the main layout containing the whole app
// each screen is contained inside a stack
// so if you want to change the background of the all app, you could to do it here
// (but you could do it also in root)
export const stackNavStyles = {
    style: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    header: {
        // backgroundColor: '#F00',
        paddingRight: 14,
        paddingLeft: 9,
    },
    headerTitle: {
        // backgroundColor: '#00F',
        // color: '#FF0',
        fontFamily: 'Poppins_medium',
    },
};

export default StyleSheet.create({
    // root is where everything is starting, it is the first element containing the app
    // this root element is then calling the stackNav layout
    root: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    backgroundImage: {
        // flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',        
    },
});
