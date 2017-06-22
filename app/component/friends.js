/**
 * Wudo
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { Text, ListItem, Right, Body, Container,
            Left, Thumbnail, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';

import data from '../../__mock__/data';

export default class extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired, // eslint-disable-line
    }

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
                            <Thumbnail source={require('../img/avatars/0.png')} />
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
