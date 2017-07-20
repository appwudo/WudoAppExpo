/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';
import { Text, ListItem, Right, Body, Container,
            Left, Thumbnail, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import { stackNavStyles } from '../styles';

import data from '../../__mock__/data';

export default class extends Component {
    static navigationOptions = {
        title: 'Friends',
        tabBarLabel: 'Friends',
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="md-contacts" size={26} color={tintColor} />
        ),
        headerStyle: stackNavStyles.header,
        headerTitleStyle: stackNavStyles.headerTitle,
    };

    getFriendKeys(): string[] {
        return Object.keys(data.friends);
    }

    getFriend(id: string): {} {
        return data.friends[id];
    }

    render() {
        return (
            <Container>
                { this.getFriendKeys().map(id =>
                    (<ListItem key={id} avatar>
                        <Left>
                            <Thumbnail source={require('../../assets/images/avatars/0.png')} />
                        </Left>
                        <Body>
                            <Text>
                                {this.getFriend(id).name}
                            </Text>
                            <Text note>something</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>                        
                    </ListItem>))
                }
            </Container>
        );
    }
}
