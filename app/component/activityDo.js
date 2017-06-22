/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';
// import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { Container, Text, Card, CardItem, Body, Button } from 'native-base';
import { View, TextInput } from 'react-native';

export default class extends Component {
    static navigationOptions = {
        title: 'Do an activity', // we could use navigation.state.params.name
    };

    render() {
        return (
            <Container>
                <Card>
                    <CardItem header>
                        <Text>Climbing</Text>
                    </CardItem>
                    <CardItem style={{ flex: 1 }}>
                        <Body>
                            {/*<AutoGrowingTextInput placeholder={'Put some details...'} />*/}
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <TextInput
                                      style={{ borderColor: 'gray', borderWidth: 1 }}
                                      editable
                                      maxLength={40}
                                      multiline
                                      numberOfLines={4}
                                    />
                                </View>
                            </View>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Body>
                            <Button block info>
                                <Text>Do</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </Container>
        );
    }
}
