/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Text } from 'native-base';

export default class extends Component {
    static navigationOptions = {
        title: 'Profile',
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="md-cog" size={26} color={tintColor} />
        ),
    };

    render() {
        return (
            <Text>Yoyo</Text>
        );
    }
}
