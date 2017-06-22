/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';
import { Text, Card, CardItem, Button, Right, Icon,
        Thumbnail, Left, Body, CheckBox } from 'native-base';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class extends Component {
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
                        <Text>Climbing</Text>
                        <Right>
                            <Button info transparent>
                                <Icon name="close" />
                            </Button>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../img/avatars/0.png')} />
                        </Left>
                        <Body>
                            <Text note>
                                Nina Hueber
                            </Text>
                            <Text note>21.05.2017 00:18</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Text>Boulder walfishgasse at 4</Text>
                    </CardItem>
                    <CardItem footer>
                        <Body>
                            <Button block info>
                                <Text>Join</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}
