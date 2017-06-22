// @flow

import { TabNavigator, TabBarBottom } from 'react-navigation';

import Activities from './component/activities';
import Feeds from './component/feeds';

export default TabNavigator({
    Activities: {
        screen: Activities,
    },
    Feeds: {
        screen: Feeds,
    },
}, {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
    },
});
