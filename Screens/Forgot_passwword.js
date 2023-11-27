import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Custominput from '../Components/CustomInput.js';
import CustomButton from '../Components/CustomButton.js';
import ModalOTP from './ModalOTP.js';
function Screen_forgot_pass() {
  const [phone, setPhone] = useState('');
  const [pwd, setpwd] = useState('');
  const [conPwd, setConPwd] = useState('');

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const onPressContinue = () => {
    users.forEach(element => {
      if (element.phone === phone) {
        setVisible(true);
      }
    });
  }
  const ResetPass = (pass) => {
    users.forEach(element => {
      if (element.phone === phone) {
        editPass(element.userId, pass)
      }
    });
  }

  useEffect(() => {
    getUsers()
  }, [])
  const getUsers = async () => {
    setLoading(true)
    await fetch("https://653f4af99e8bd3be29e02de4.mockapi.io/user")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res)
        console.log(users)
      })
      .catch((e) => console.log(e))
    setLoading(false)
  }
  const editPass = (userId, pass) => {
    fetch("https://653f4af99e8bd3be29e02de4.mockapi.io/user/" + `/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        password: pass,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log("updated:", resJson)
      })
      .catch((e) => {
        console.log(e)
      })
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
        <ModalOTP
          visible={visible}
          onDismiss={() => setVisible(false)}
          onSubmit={() => {
            if (pwd === conPwd) {
              ResetPass(pwd)
            }
          }}
          cancelable
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>Thiết lập mật khẩu</Text>
          </View>
          
          <Text style={styles.Text_Style}>Mật khẩu mới</Text>
          <Custominput placeholder='Nhập nội dung' value={pwd} setValue={(pwd) => { setpwd(pwd) }} />
          <Text style={styles.Text_Style}>Xác nhận mật khẩu</Text>
          <Custominput placeholder='Nhập nội dung' value={conPwd} setValue={(conPwd) => { setConPwd(conPwd) }} />


        </ModalOTP>

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
