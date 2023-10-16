import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Custominput from '../Components/CustomInput.js';
import CustomButton from '../Components/CustomButton.js';
function Screen_forgot_pass() {
  const [phone, setPhone] = useState('');
  
  const onPressContinue = () => {
    alert('Continue');
  }
  

  return (
    <View style={styles.container}>
      
      <View style={styles.Forgot_pass_area}>
        <View style={styles.Forgot_pass_label}>
          <Text style={styles.label_text}>Quên mật khẩu</Text>

        </View>
        <View style={styles.input_area}>
          <Text style={styles.Text_Style}>Số điện thoại</Text>
          <Custominput placeholder='Nhập nội dung' value={phone} setValue={setPhone} />
        </View>
        
        <View style={styles.button_area}>
          <CustomButton text={"Tiếp tục"} onPress={onPressContinue} />
        </View>
        
        
      </View>


    </View>
  );
}
export default Screen_forgot_pass;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#2b83f9',
    //backgroundImage: 'linear-gradient(to right, #2b83f9, #47a6fa)',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
  Forgot_pass_area: {

    backgroundColor: '#f1f9ff',
    width: '100%',
    height: '110%',
    marginBottom: -50,
    borderRadius: 35,
    alignItems: 'center',

  },
  Forgot_pass_label: {

    marginVertical: 25

  },
  label_text: {
    fontWeight: 'bold',
    fontSize: 17
  },
  input_area: {
    width: '80%'
  },
  Text_Style: {
    fontSize: 18
  },
  
  button_area: {
    marginVertical: 50,
    width: '60%'
  },
  
});
