import {View, Text, } from 'react-native';
import React from 'react';
import Input from '../../components/Input'
// import Button from '../../components/Button';


function HomePage() {   
    
        return(
            <View>
                <View>
                  <Text> Welcome, Toyln</Text> 

                    <Input></Input>

                    <View style={{flexDirection: 'row'}}>
                    {/* <Button onPress={() }></Button>
                    <Button></Button>
                    <Button></Button> */}
                    </View>
                    
                </View>
            </View>
        )
    }

export default HomePage;