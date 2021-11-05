import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 20
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)


const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: ITEM_WIDTH,
    padding: 5,
    height: 300,
    elevation: 3,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  }
})


export default CarouselCardItem;
