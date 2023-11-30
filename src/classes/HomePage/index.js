import {View, Text, FlatList, } from 'react-native';
import React from 'react';
import Input from '../../components/Input'
import Boxes from '../../components/Boxes';
// import Button from '../../components/Button';


 renderItem =() =>{

    return(
        // <View><Text>jjjjjjjjh</Text></View>
        <Boxes/>
    )
}
const  HomePage =() =>{   
    
        return(
            <View>
                <View style={{width: '90%', marginLeft: 21}}>
                  <Text> Welcome, Toyln</Text> 
                    <Input style={{heigt: 100 , width: '110%'}}></Input>

                    <View style={{flexDirection: 'row'}}>
                    {/* <Button onPress={() }></Button>
                    <Button></Button>
                    <Button></Button> */}
                    </View>
                    

                    <Text>What's Trending?</Text>
                    <View style={{width: '100%', 
                  marginTop: 10,  height: '126%'}}>
                    
                     <View>
                     <FlatList  
                    data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) => 
                    <View>
                        
                        <Boxes text={item.key}/>
                    </View>
                    }
                    horizontal
                    ItemSeparatorComponent={this.renderSeparator}/>
                
                  <FlatList  
                    data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) => 
                    <View>
                        
                        <Boxes text={item.key}/>
                    </View>
                    }
                    horizontal
                    ItemSeparatorComponent={this.renderSeparator}/>
                
                     </View>
                     

                    </View>
                   
                </View>
            </View>
        )
    }

export default HomePage;