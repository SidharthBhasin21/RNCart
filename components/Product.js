import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addToCart, removeFromCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';


const Product = ({product}) => {
    const dispatch =  useDispatch();
    const cartItems = useSelector(state => state.reducer)
    const [isAdded, setIsAdded] = useState(false);
    // console.log(cartItems);

    const handleAddToCart = (prod) => {
        dispatch(addToCart(prod))
    }
    const handleRemoveFromCart = (prod) => {
        dispatch(removeFromCart(prod.name))
    }
    useEffect(() => {
      
      let res =  cartItems.filter(item => {
        return item.name === product.name
      })
      res.length ? setIsAdded(true) : setIsAdded(false)
    }, [cartItems])

  return (
    <View style = {styles.productView}>
              <Text style={styles.highlight}>{product.name}</Text>
              <Text style={styles.highlight}>{product.color}</Text>
              <Text style={styles.highlight}>Price: {product.price}</Text>
              <Image
                source={{uri: product.image}}
                style={{width: 200, height: 200,marginBottom: 10, borderRadius: 10,}}
              />
              {
                isAdded ?
                <Button title='Remove from cart' color={'red'}  onPress={()=>handleRemoveFromCart(product)}/>
                :<Button title='Add to cart' color={'green'}  onPress={()=>handleAddToCart(product)}/>
              }
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    productView:{
        margin: 20,
        padding: 20,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        alignItems: 'center',
        gap: 5,
    },
  highlight: {
    fontWeight: '700',
    fontSize: 20,
  },
})