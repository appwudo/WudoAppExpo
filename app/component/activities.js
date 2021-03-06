/**
 * Wudo
 * @flow
 * test
 */

import React, { Component } from 'react';
import { Text, ListItem, Right, Body, Button, Container } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { NavigationScreenProp } from 'react-navigation';

import i18n from '../i18n';
import { stackNavStyles } from '../styles';

import data from '../../__mock__/data';

type DefaultProps = {};
type Props = {
    navigation: NavigationScreenProp
//   i18n: I18n   // we should pass i18n in props
};
type State = {};

export default class extends Component<DefaultProps, Props, State> {
    props: Props;

    static navigationOptions = (props) => {
        return {
            title: i18n.t('Activities').toUpperCase(),
            tabBarLabel: i18n.t('Activities'),
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-basketball" size={26} color={tintColor} />
            ),
            headerRight: (
                <Button info title="Add" onPress={() => props.navigation.navigate('ActivityAdd')}>
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
                            <Button large rounded onPress={() => this.doActivity()}>
                                <Text>Do</Text>
                            </Button>
                        </Right>
                    </ListItem>))
                }
            </Container>
        );
    }
}
