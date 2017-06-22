// @flow

import { StackNavigator, TabNavigator, TabBarBottom, NavigationContainer } from 'react-navigation';

import Activities from './component/activities';
import Feeds from './component/feeds';
import Friends from './component/friends';
import Profile from './component/profile';

import ActivityDo from './component/activityDo';
import ActivityAdd from './component/activityAdd';
import Followers from './component/followers';

const MainScreen: NavigationContainer = TabNavigator({
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

export default StackNavigator({
    Root: {
        screen: MainScreen,
    },
    ActivityDo: {
        screen: ActivityDo,
    },
    ActivityAdd: {
        screen: ActivityAdd,
    },
    Followers: {
        screen: Followers,
    },
});
