
import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text
} from 'react-native';
import { BoxL } from '../../components/BoxL';
import { BorderComp } from '../../components/BorderComp';
import CartBox from '../../components/CartBox';
import { ManInCoat1, Photo3 } from '../../Images';
import Button from '../../components/Button';
const data1 =
    [
        {
            image: ManInCoat1,
            price: 1
        },
        {
            image: ManInCoat1,
            price: 2
        },
        {
            image: Photo3,
            price: 3
        },
          {
            image: ManInCoat1,
            price: 3
        }
    ]
function Cart( {navigation}) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                
     <Text style={{fontStyle: 'Bold'}}>Cart</Text>
            </View>
            {data1.map(item => {
                return (
                
                    <View>

                   
                    <CartBox data={data1}></CartBox>
                    <View style={{width: '100%', marginTop: '-5%',
                    marginBottom: '-15', backgroundColor: 'grey', height: 1}}></View>   
   
                    </View>
                )
                
            })}

{/* <View style={{width: '100%', backgroundColor: 'grey', height: 2}}></View>    */}

            <View style={{ marginTop: 20,marginLeft: 29, width: '100%', justifyContent: 'center'}}>
              <View style={{flexDirection: 'row',borderRadius: 42 , justifyContent: 'space-between', 
              padding: 20, width: '83%', backgroundColor: '#F4F4F4'}}>
                <Text>Total Price</Text>
                <Text>68,148 NGN</Text>
              </View>

                <View style={{ marginTop: 15, marginBottom: 18 }}>
                    <Button text="Go to Shipping" onPress={() => {navigation.navigate('Shipping')}} />
                </View>

            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    button1: {
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: 12,
        height: 51,
        width: '80%',
        justifyContent: 'center',
        left: '10%'
    },

});

export default Cart;
