/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';
import { Text, Card, CardItem, Button, Right, Icon,
        Thumbnail, Left, Body, CheckBox } from 'native-base';
import { StyleSheet, View, Dimensions } from 'react-native';

import data from '../../__mock__/data';

export default class extends Component {
    getFollowers(): {}[] {
        return data.activities.id23233223.followers;
    }

    getFriend(id: string): {} {
        return data.friends[id];
    }

    getAvatar(index: number) {
        const img = index % 5;
        if (img === 1) return require('../img/avatars/1.png');
        if (img === 2) return require('../img/avatars/2.png');
        if (img === 3) return require('../img/avatars/3.png');
        if (img === 4) return require('../img/avatars/4.png');
        return require('../img/avatars/0.png');
    }

    styles = StyleSheet.create({
        container: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height - 20,
            backgroundColor: '#FFFFFF00',
            padding: 10,
        } });

    render() {
        return (
            <View style={this.styles.container}>
                <Card>
                    <CardItem header>
                        <Text>Running</Text>
                        <Right>
                            <Button info transparent>
                                <Icon name="close" />
                            </Button>
                        </Right>
                    </CardItem>
                    {this.getFollowers().map((follower, index) =>
                        (<CardItem key={follower.id}>
                            <Left>
                                <Thumbnail source={this.getAvatar(index)} />
                            </Left>
                            <Body>
                                <Text>{this.getFriend(follower.id).name}</Text>
                            </Body>
                            <Right>
                                <CheckBox checked={follower.allow} />
                            </Right>
                        </CardItem>),
                    )}
                </Card>
            </View>
        );
    }
}
