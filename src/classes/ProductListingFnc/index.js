import { View, Text, FlatList, Image } from "react-native"

const { useEffect, useState } = require("react")
export const ProductListingFnc = () => {

  const [products, setProducts] = useState([])
  useEffect(() =>
    getProducts()
    , [])

  const getProducts = () => {
    const URL = "https://fakestoreapi.com/products";

    fetch(URL)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
  }

  const renderItem = ({ item }) => {

    { console.log("item", item) }
    return (

      <View style={{ backgroundColor: 'blue', height: 100, width: '50%' }}>
        <Image style={{ backgroundColor: 'orange', width: '70%', height: '90%' }}
          source={{ uri: item.image }}></Image>
      </View>)
  }
  return (
    <View>

      <FlatList
        data={products}
        renderItem={renderItem}></FlatList>
      <Text>sjdkj</Text>
    </View>
  )
}


