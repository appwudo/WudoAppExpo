/**
 * Wudo
 * @flow
 * test
 */

import React, { Component, PropTypes } from 'react';
import { Text, ListItem, Right, Body, Button, Container } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import i18n from '../i18n';
import { stackNavStyles } from '../styles';

import data from '../../__mock__/data';

export default class extends Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired, // eslint-disable-line
    }

    static navigationOptions = (props) => {
        return {
            title: i18n.t('Activities'),
            tabBarLabel: i18n.t('Activities'),
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-basketball" size={26} color={tintColor} />
            ),
            headerRight: (
                <Button rounded info title="Add" onPress={() => props.navigation.navigate('ActivityAdd')}>
                    <Text>Add</Text>
                </Button>
            ),
            headerStyle: stackNavStyles.header,
            headerTitleStyle: stackNavStyles.headerTitle,
        };
    };

    getActivities() {
        return data.activities;
    }

    getActivityKeys(): string[] {
        return Object.keys(this.getActivities());
    }

    showFollowers(): void {
        this.props.navigation.navigate('Followers');
    }

    doActivity(): void {
        this.props.navigation.navigate('ActivityDo'); // , { name: 'Jordan' }
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
