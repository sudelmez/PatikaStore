/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, TextInput, FlatList } from 'react-native';
import CardComponent from './components/card/card.js';
import products from '../products.json';
import styles from './components/card/card.style.js';
import textstyles from './components/text/text.styles.js';
const App = () => {
  return (
    <SafeAreaView style={textstyles.container}>
        <Text style={textstyles.headline}>PATIKASTORE</Text>
        <TextInput
          style={textstyles.textInput}
          placeholder="Ara..."
        />
        <FlatList numColumns={2} 
          columnWrapperStyle={styles.columnWrapper} keyExtractor={(item) => item.id.toString()} data={products} renderItem={data =>
            <CardComponent uri={data.item.imgURL} description={data.item.title} price={data.item.price} />
          }
        />
    </SafeAreaView>
  );
};

export default App;

