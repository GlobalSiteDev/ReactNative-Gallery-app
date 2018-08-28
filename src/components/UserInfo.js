import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const userInfo = (props) => (
    <View style={styles.infoContainer}>
        <Text style={styles.authorName}>{props.author}</Text>
        <Text style={styles.bio}>{props.bio}</Text>
    </View>
);

const styles = StyleSheet.create({
    infoContainer: {
        height: 100
    },
    authorName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bio: {
        fontSize: 12
    }
});

export default userInfo;

