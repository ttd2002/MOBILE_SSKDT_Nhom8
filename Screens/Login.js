import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Custominput from '../Components/CustomInput.js';
import CustomButton from '../Components/CustomButton.js';
function Screen_login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const onPressForgot = () => {
    console.log('forgot');
  }
  const onPressLogin = () => {
    console.log('login');
  }
  const onPressFingerPrint = () => {
    console.log('finger print login');
  }
  const onPressRegister = () => {
    console.log('Register');
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
      <View style={styles.login_area}>
        <View style={styles.login_label}>
          <Text style={styles.label_text}>Đăng nhập</Text>

        </View>
        <View style={styles.input_area}>
          <Text style={styles.Text_Style}>Số điện thoại</Text>
          <Custominput placeholder='Nhập nội dung' value={phone} setValue={setPhone} />
          <Text style={styles.Text_Style}>Mật khẩu</Text>
          <Custominput placeholder='Nhập mật khẩu' value={password} setValue={setPassword} secureTextEntry />
        </View>
        <View style={styles.forgot}>
          <Pressable onPress={onPressForgot}>
            <Text style={styles.text_forgot}>Quên mật khẩu?</Text>
          </Pressable>
        </View>
        <View style={styles.button_area}>
          <CustomButton text={"Đăng nhập"} onPress={onPressLogin} />
        </View>
        <View style={styles.finger_print_login_area}>
          <Pressable style={styles.finger_print_container} onPress={onPressFingerPrint}>
            <Image style={styles.finger_print} source={require("../images/icon_vantay.png")} />
            <Text style={styles.Text_Style}>Đăng nhập bằng dấu vân tay</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <View style={styles.finger_print_container}>
            <Text style = {styles.Text_Style}>Bạn chưa có tài khoản?</Text>
            <Pressable onPress={onPressRegister}>
              <Text  style = {[styles.Text_Style,{color:'#6a98c5'}]}> Đăng ký ngay</Text>
            </Pressable>
          </View>
          <View style={styles.finger_print_container}>
            <Text style = {styles.Text_Style}>Hotline</Text>
            <Pressable>
              <Text style={[styles.Text_Style,{color:'#6a98c5'}]}> 19009095</Text>
            </Pressable>
          </View>
        </View>
      </View>


    </View>
  );
}
export default Screen_login;
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
  login_area: {

    backgroundColor: '#f1f9ff',
    width: '100%',
    height: '80%',
    marginBottom: '-50px',
    borderRadius: '35px',
    alignItems: 'center',

  },
  login_label: {

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
  forgot: {
    marginVertical: 20,
    marginRight: -150
  },
  text_forgot: {
    color: '#5886c6',
    fontSize: '20px',
    fontWeight: '500'
  },
  input_text: {
    backgroundColor: 'white',
    padding: '10px',
    marginVertical: '5px',
    width: '100%'
  },
  button_area: {
    width: '80%'
  },
  finger_print_login_area: {
    marginVertical: '25px',
    width: '70%'

  },
  finger_print_container: {
    flexDirection: 'row',

  },
  finger_print: {
    width: '25px',
    height: '25px',
    marginRight: '10px'
  },
  footer:{
    width:'80%',
    marginTop: '60px',
    alignItems: 'center'
  }

});
