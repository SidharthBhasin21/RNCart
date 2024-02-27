import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Header from './Header';
import Product from './Product';


function ProductWrapper({navigation}) {
  const products = [
    {
      name: 'Product 1',
      color: 'Red',
      price: 10,
      image:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781',
    },
    {
      name: 'Product 2',
      color: 'Blue',
      price: 20,
      image:
        'https://i.pcmag.com/imagery/roundups/01WOu4NbEnv3pJ54qp7j50k-16..v1647874749.jpg',
    },
    {
      name: 'Product 3',
      color: 'Green',
      price: 15,
      image: 'https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg',
    },
    {
      name: 'Product 4',
      color: 'Yellow',
      price: 25,
      image: 'https://www.computerhope.com/jargon/i/iphone.png',
    },
    {
      name: 'Product 5',
      color: 'Orange',
      price: 30,
      image: 'https://m.media-amazon.com/images/I/81oV7VNAAZL._AC_UF1000,1000_QL80_.jpg',
    }
  ];

  return (
    <View style={styles.sectionContainer}>
      <Header navigation={navigation}/>
      
      <ScrollView>
        {products.map((product, index) => (
            <Product key={product.name} product={product} />
          )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'white',
    fontSize: 24,
  },
  map: {
    height: 400,
    width: 400,
    backgroundColor: 'blue',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textShadowColor: 'red',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    fontSize: 20,
  },
});

export default ProductWrapper;
