// @flow

import { TabNavigator, TabBarBottom } from 'react-navigation';

import Activities from './component/activities';
import Feeds from './component/feeds';
import Friends from './component/friends';
import Profile from './component/profile';

export default TabNavigator({
    Activities: {
        screen: Activities,
    },
    Feeds: {
        screen: Feeds,
    },
    Friends: {
        screen: Friends,
    },
    Profile: {
        screen: Profile,
    },
}, {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    tabBarOptions: { // https://reactnavigation.org/docs/navigators/tab#tabBarOptions-for-TabBarBottom-default-tab-bar-on-iOS
    },
});
