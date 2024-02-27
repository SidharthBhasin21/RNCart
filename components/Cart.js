import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'

const Cart = () => {    

  const cartData = useSelector(state => state.reducer)
    

  return (
    <View>
    {
        cartData.map((product,i) => (
            <Product key={i} product={product} />
        ))
    }
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})