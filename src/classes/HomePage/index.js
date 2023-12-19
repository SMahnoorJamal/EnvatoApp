import { View, Text, FlatList, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Input from '../../components/Input'
import Boxes from '../../components/Boxes';
import { styles } from '../../classes/HomePage/styles';
import {data } from './data';
// import Button from '../../components/Button';


// renderItem = () => {

//     return (
//         // <View><Text>jjjjjjjjh</Text></View>
//         <Boxes />
//     )
// }
class HomePage extends React.Component {

    constructor (props) {
super(); 
    this.state ={
data: [
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png')

 ]
    }

    }
  
    render() {
    return (
        <ScrollView style={{ flex: 1, marginLeft: 21 }}>
            <Text style={{ marginTop: 20, marginBottom: 10, }}> Welcome, Toyln</Text>
            <View style={{
                height: 50, width: '93%',
                flexDirection: 'row', backgroundColor: 'white'
            }}>

                <TextInput
                    // {...props}
                    secureTextEntry={false}
                    multiline={false}
                    style={styles.input}
                    placeholder={"Search"}
                    placeholderStyle={{ color: 'red' }}
                // placeholderTextColor={'red'}
                >
                </TextInput>

                <TouchableOpacity style={{
                    width: '10%',
                    height: '36%', marginTop: 17, marginLeft: 18
                }}>
                    <Image source={require('../../Images/Search.png')} style={styles.iconStyle} />

                </TouchableOpacity>

            </View>

            <Text style={{ marginTop: 30, }}>What's Trending?</Text>

            <View style={{
                width: '92%',
                marginTop: 22, height: '100%'
            }}>


                <View>
                    <FlatList
                        data={[
                            { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
                            { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
                            { key: 'Python' }, { key: 'Ajax' }, { key: 'C++' },
                            { key: 'Ruby' }]}
                        renderItem={({ item }) =>
                            <View

                            >
                                <Image style={{
                                    backgroundColor: 'red',
                                    marginLeft: 9, width: 90, height: 86,
                                    borderRadius: 100, borderWidth: 0.5
                                }} source={require('../../Images/Photo4.png')}></Image>

                                <View style={{ marginLeft: 11, marginTop: 5 }}>
                                    <Text>Jk. Rowling</Text>
                                    <Text>{item.key}</Text>
                                </View>
                            </View>

                            // 
                        }
                        horizontal
                        ItemSeparatorComponent={this.renderSeparator} />


                </View>

                <View style={{ marginTop: 35,borderRadius: 250, 
                    height: 90,width: '90%', backgroundColor: 'red' }}>

                    <ImageBackground source={require('../..//Images/WebDress.png')}
                        imageStyle={{ height: 150, width: '110%', borderRadius: 27}}>
                        <View style={{
                            justifyContent: 'center',
                            marginTop: 80, alignItems: 'center'
                        }}>
                            <Text style={{ color: 'white' }}>Hand-Made</Text>
                            <Text style={{ color: 'white' }}> For You</Text>
                        </View>
                    </ImageBackground>
                </View>


                <View style={{
                    flexDirection: 'row',
                    marginTop: 80, justifyContent: 'space-between'
                }}>
                    <Text>Explore by fashion</Text>
                    <Text>See all</Text>
                </View>
                <View>

                </View>   

<View style={styles.container2}>
      <View style={styles.row}>
        {this.state.data.map((image, index) => (
          <View style={styles.imageContainer}>
            <ImageBackground source={image} style={styles.image} >
             <View style={{
                justifyContent: 'center',
                marginTop: 50, alignItems: 'center'
            }}>
                <Text style={{ color: 'white' }}>Hand-Made</Text>
                <Text style={{ color: 'white' }}> For You</Text>
            </View>
            </ImageBackground>
          </View>
        ))}
      </View>
    </View>
            </View>

        </ScrollView>
    )
}
}


export default HomePage;