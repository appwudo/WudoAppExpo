/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';
import { Text, Card, CardItem, Body, Button, Right, Icon,
            Form, Item, Input, Label } from 'native-base';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class extends Component {
    styles = StyleSheet.create({
        container: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: '#FFFFFF00',
            padding: 10,
            paddingBottom: Dimensions.get('window').height * 0.5,
        } });

    render() {
        return (
            <View style={this.styles.container}>
                <Card>
                    <CardItem header>
                        <Text>Add activity</Text>
                        <Right>
                            <Button info transparent>
                                <Icon name="close" />
                            </Button>
                        </Right>
                    </CardItem>
                    <CardItem style={{ flex: 1 }}>
                        <Body>
                            <Form>
                                <Item stackedLabel>
                                    <Label>Acitivty name</Label>
                                    <Input keyboardType="email-address" />
                                </Item>
                            </Form>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Body>
                            <Button block info>
                                <Text>Add</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}
