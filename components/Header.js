import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Header = ({navigation}) => {
  const cartData = useSelector(state => state.reducer);
  const [items, setItems] = useState(0);

  useEffect(() => {
    setItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dukaan</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.heading}>🛒 - {items}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'black',
    padding: 10,
  },
});
