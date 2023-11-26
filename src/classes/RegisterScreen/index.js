
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { BoxL } from '../../components/BoxL';

function RegisterScreen({navigation}) {
  return (
          <ScrollView>
             <BoxL></BoxL>
             <View style={styles.container}>

<Text
  numberOfLines={1}
  adjustsFontSizeToFit
  style={styles.Text}
>
{'Register'}
 
</Text>

<View style={{ padding: '8%' }}>
  <Input
    placeholder="Username"
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      borderWidth: 2,

      borderColor: '#C4C4C4',
      height: 56,
      backgroundColor: 'white',
      width: '100%',
      marginTop: 10
    }} />

  <Input
    placeholder="Password"
    icon="true"
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#C4C4C4',
      height: 56,
      backgroundColor: 'white',
      width: '100%',
      marginTop: 10
    }}
  />

  <View style={{ marginTop: '18%' }}>
    <Button style={{
      width: '100%', height: '13%', alignItems: 'center',
      borderRadius: 50,
      justifyContent: 'center', backgroundColor: 'gray'
    }} text="Log In" onPress={() => navigation.navigate('Home')} />
    <View style={{
      padding: '30%', marginTop: -150,
      alignItems: 'center'
    }}>

      <View style={{ marginTop: 1 }}>
        <View>
          <Text style={{ width: '130%' }}>Don't have an account?</Text>
        </View>
      </View>
      {/* <TouchableOpacity style={{ backgroundColor: 'red'}}onPress={navigation.navigate('Login')}>
        <Button style={{ width: '150%', marginTop: 6 }}
        
        on>
          Register</Button>
      </TouchableOpacity> */}

<View style={{ marginTop: '1%' }}>
    <Button style={{
      width: '50%', height: '150%', alignItems: 'center',
      borderRadius: 50, marginBottom: 90,
      justifyContent: 'center', backgroundColor: 'gray'
    }} text="Login" onPress={() => navigation.navigate('Login')} />
    <View style={{
      padding: '30%', marginTop: -190,
      alignItems: 'center', 
    }}>
</View>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Text>jhkj</Text>
</TouchableOpacity>

</View>
    </View>


  </View>



</View>
</View>

{/* );
} */}

{/* 
             <BorderComp navigation={navigation}/>
    */}
    </ScrollView>

  );
}
export default RegisterScreen;

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
  container:
  {
  marginTop: '10%',
  borderRadius: 50,
  borderColor: '#c0c0c0',
  borderWidth: 2,
  height: '100%',
  width: '100%',
  marginBottom: '100%',
  backgroundColor: 'white'
  },
  Text:
  {
  fontWeight: 'bold',
  fontSize: 35,
  marginTop: '7%',
  marginLeft: '9%',
  color: '#989494'
  }
});

