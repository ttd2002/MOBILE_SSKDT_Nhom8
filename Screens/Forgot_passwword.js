import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Custominput from '../Components/CustomInput.js';
import CustomButton from '../Components/CustomButton.js';
function Screen_forgot_pass() {
  const [phone, setPhone] = useState('');
  
  const onPressContinue = () => {
    console.log('Continue');
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.logo_area}>
        <View style={styles.logo_banner}>
          <Image style={styles.logo_style} source={require('../images/logo.png')} />
          <View>
            <Text style={styles.logo_banner_text_1}>SSKĐT</Text>
            <Text style={styles.logo_banner_text_2}>Sổ sức khỏe điện tử</Text>
          </View>
        </View>
      </View>
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
    backgroundImage: 'linear-gradient(to right, #2b83f9, #47a6fa)',
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo_area: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_banner: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo_style: {
    width: '100px',
    height: '100px'
  },
  logo_banner_text_1: {
    color: 'white',
    fontSize: '45px',
    fontWeight: '500',
  },
  logo_banner_text_2: {
    color: 'white',
    fontSize: '15px',
    fontWeight: '350',
  },
  Forgot_pass_area: {

    backgroundColor: '#f1f9ff',
    width: '100%',
    height: '80%',
    marginBottom: '-50px',
    borderRadius: '35px',
    alignItems: 'center',

  },
  Forgot_pass_label: {

    marginVertical: '25px'

  },
  label_text: {
    fontWeight: 'bold',
    fontSize: '17px'
  },
  input_area: {
    width: '80%'
  },
  Text_Style: {
    fontSize: '18px'
  },
  
  button_area: {
    marginVertical: '50px',
    width: '60%'
  },
  
});
