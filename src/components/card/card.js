/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './card.style';

const CardComponent = (props) => {
    return <View style={styles.container}>
        <Image style={styles.image}
            source={{
                uri: props.uri,
            }}
        />
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.price}>{props.price}</Text>
    </View>;
};

export default CardComponent;
