/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View,TextInput,Button,Alert} from 'react-native';
import { blue } from 'ansi-colors';



type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
//-----------------------------------------------------------------------
  render() {
    return (
      <View style = {{borderRadius: 20}}>
      <View style={{padding:35,backgroundColor: 'steelblue',marginTop:50}}>
        <TextInput
        style = {{height:50,backgroundColor:'#DDDDDD',borderRadius: 10}}
        placeholder="Tài khoản"
        onChangeText={(text) => this.setState({text})}
        />
        <TextInput
        style = {{height:50,marginTop: 10,backgroundColor:'#DDDDDD',borderRadius: 10}}
        placeholder="Mật khẩu"
        visible-password = "password"
        //onChangeText={(text) => this.setState({text})}
        />
       </View>
      <View style={{paddingBottom:30,justifyContent:'center',backgroundColor: 'steelblue',flexDirection:'row'}}>
        <View style={{justifyContent: 'space-between'}}>
          <Button style={{}}
            onPress={() => {
            Alert.alert('You tapped the button!');
              }
            }
            title="Đăng nhập"
          />
        </View>
        <View style={{justifyContent: 'space-between',marginLeft:30}}>
          <Button style={{}}
            onPress={() => {
            Alert.alert('You tapped the button!');
              }
            }
            title="Đăng ký"
          />
        </View>
      </View>
    </View>
    );
  }

}
