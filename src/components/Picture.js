import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Image from './Image';

const picture = (props) => (
    <Card>
        <CardSection>
            <Image source={props.picture.urls.thumb} onPress={() => props.navigation.navigate('Details', props.picture)} />
        </CardSection>

        <CardSection>
            <Text style={styles.info}>Photo by: {'\n'}{props.picture.user.name}</Text>
        </CardSection>
    </Card>
);

const styles = StyleSheet.create({
    info: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        height: 60
    }
});

export default picture;
