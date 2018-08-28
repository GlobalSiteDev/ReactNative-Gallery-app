import React from 'react';
import { View, StyleSheet } from 'react-native';

const card = (props) => (
    <View style={styles.pictureContainer}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    pictureContainer: {
        width: '30%',
        marginTop: 10,
    },
});

export default card;
