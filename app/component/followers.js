/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';
import { Text, Card, CardItem, Button, Right, Icon,
        Thumbnail, Left, Body, CheckBox, Container } from 'native-base';

import data from '../../__mock__/data';

export default class extends Component {
    static navigationOptions = {
        title: 'Followers', // we could use navigation.state.params.name
    };

    getFollowers(): {}[] {
        return data.activities.id23233223.followers;
    }

    getFriend(id: string): {} {
        return data.friends[id];
    }

    getAvatar(index: number) {
        const img = index % 5;
        if (img === 1) return require('../../assets/images/avatars/1.png');
        if (img === 2) return require('../../assets/images/avatars/2.png');
        if (img === 3) return require('../../assets/images/avatars/3.png');
        if (img === 4) return require('../../assets/images/avatars/4.png');
        return require('../../assets/images/avatars/0.png');
    }

    render() {
        return (
            <Container>
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
            </Container>
        );
    }
}
