/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';
import { Text, Card, CardItem, Body, Button, Right, Icon,
            Form, Item, Input, Label, Container } from 'native-base';

export default class extends Component {
    static navigationOptions = {
        title: 'Add an activity',
    };

    render() {
        return (
            <Container>
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
            </Container>
        );
    }
}
