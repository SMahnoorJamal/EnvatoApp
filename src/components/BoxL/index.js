import React, {Component} from "react";
import { imaqges } from  '../../Images/index';
import { Image } from "react-native";
// import {images} from '../../images/spash.jpg';

export class BoxL extends Component {

    render() {
    return (
        // <View style={styles.container}>
           <Image
           style={{height: '26%',
           marginTop: 0, width: '25%',
           alignSelf: 'center', resizeMode:'contain'}}
           source ={require('../../Images/Photo3.png')}>
           </Image>
        //  </View>
    )
    
}

}