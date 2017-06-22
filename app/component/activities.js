/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';
import { Text, ListItem, Right, Body, Button, Container } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import data from '../../__mock__/data';

export default class extends Component {
    static navigationOptions = {
        tabBarLabel: 'Activities',
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="md-basketball" size={26} color={tintColor} />
        ),
    };

    getActivities() {
        return data.activities;
    }

    getActivityKeys(): string[] {
        return Object.keys(this.getActivities());
    }

    showLightBox(screenName: string): void {
        console.log('Open screen', screenName);
    }

    showFollowers(): void {
        this.showLightBox('followers');
    }

    addActivity(): void {
        this.showLightBox('addActivity');
    }

    doActivity(): void {
        this.showLightBox('doActivity');
    }

    render() {
        return (
            <Container>
                {this.getActivityKeys().map(id =>
                    (<ListItem key={id}>
                        <Body>
                            <Text>{this.getActivities()[id].name}</Text>
                            <Text note onPress={() => this.showFollowers()}>
                                {this.getActivities()[id].followers.length} Followers
                            </Text>
                        </Body>
                        <Right>
                            <Button rounded info onPress={() => this.doActivity()}>
                                <Text>Do</Text>
                            </Button>
                        </Right>
                    </ListItem>))
                }
            </Container>
        );
    }
}
