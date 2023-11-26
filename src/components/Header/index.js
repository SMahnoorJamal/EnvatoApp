import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import Vector from '../../Images/index';
class Header extends Component {


    render() {
    console.log('headerProps', this.props)

    return (
        <View>
            {this.props.backButton ?

                <View style={styles.header1}>

                    <TouchableOpacity onPress={this.props.onPress}>
                        <Image style={{color:'#000000', fontSize: 15}}
                        source={require('../../Images/Photo6.png')}
                        ></Image>
                    </TouchableOpacity>

                    <Text style={styles.headerText}>{this.props.title}</Text>
                </View>
                       
                :
                <View style={styles.header}>

                    <Text style={styles.headerText}>{this.props.title}</Text>
                </View>}
        </View>

    )}
};


export default Header;