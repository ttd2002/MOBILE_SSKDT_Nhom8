import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import Custominput from '../Components/CustomInput.js';
import CustomButton from '../Components/CustomButton.js';
import ModalOTP from './ModalOTP.js';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from './config.js';
import firebase from 'firebase/compat/app';
import { useNavigation } from '@react-navigation/native';

function Screen_Register() {
    const naviRes = useNavigation();
    const [fullName, setfullName] = useState('');
    const [phone, setPhone] = useState('');

    const [password, setpassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [check, setCheck] = useState(false);
    const [code, setCode] = useState('');

    const [verificationId, setVertificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber('+84 '+phone.substring(1), recaptchaVerifier.current)
            .then(setVertificationId);
        setCheck(true)
        if (check) {
            setVisible(true)
        }

    }

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setCode('');
                onPressRegister(phone, fullName, password)
                setCheck(false)
                setVisible(false)
                naviRes.navigate("Login")
                setPhone('')
                setfullName('')
                setpassword('')
            })
            .catch((error) => {
                alert("Xác thực thất bại")
            })
    }
    const onPressRegister = (phoneNum, name, pwd) => {
        fetch("https://653f4af99e8bd3be29e02de4.mockapi.io/user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "phone": phoneNum,
                "userName": name,
                "password": pwd,
                "login": false,

                "qrCode": "https://653f4af99e8bd3be29e02de4.mockapi.io/user/",
            })
        }).then((res) => res.json())
            .then(resJson => {
                console.log('Users:', resJson)
                editQr(resJson.userId)
                alert("Đăng ký thành công")
            }).catch(e => { console.log(e) })

    }

    const editQr = (userId) => {
        fetch("https://653f4af99e8bd3be29e02de4.mockapi.io/user/" + `/${userId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "qrCode": "https://653f4af99e8bd3be29e02de4.mockapi.io/user" + `/${userId}`,

            })
        }).then((res) => res.json())
            .then(resJson => {
                console.log('updated:', resJson)
            }).catch(e => { console.log(e) })
    }



    return (
        <View style={styles.container}>

            <View style={styles.Register_area}>
                <View style={styles.Register_label}>
                    <Text style={styles.label_text}>Đăng ký</Text>

                </View>
                <View style={styles.input_area}>

                    <Text style={styles.Text_Style}>Họ và tên</Text>
                    <Custominput placeholder='Nhập nội dung' value={fullName} setValue={setfullName} />
                    <Text style={styles.Text_Style}>Số điện thoại</Text>
                    <Custominput placeholder='Nhập nội dung' value={phone} setValue={setPhone} />
                    <Text style={styles.Text_Style}>Mật khẩu</Text>
                    <Custominput placeholder='Nhập nội dung' value={password} setValue={setpassword} secureTextEntry />
                </View>
                <View style={styles.input_area}>
                    <Text style={styles.Text_Style}> <Text style={{ color: 'red' }}>*</Text> Vui lòng cung cấp thông tin chính xác để đảm bảo công tác phòng chống dịch Covid-19 và nhận chứng nhận tiêm chủng</Text>
                </View>
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={firebaseConfig}
                />
                <View style={styles.button_area}>
                    <CustomButton text={"Đăng ký"} onPress={sendVerification} />
                </View>

                <ModalOTP
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    onSubmit={confirmCode}
                    cancelable
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Xác thực OTP</Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 20 }}>Mã OTP</Text>
                    </View>
                    <Custominput placeholder='Nhập nội dung' value={code} setValue={setCode} />


                </ModalOTP>

            </View>


        </View>
    );
}
export default Screen_Register;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b83f9',
        //backgroundImage: 'linear-gradient(to right, #2b83f9, #47a6fa)',
        alignItems: 'center',
        justifyContent: 'center',

    },
    Register_area: {

        backgroundColor: '#f1f9ff',
        width: '100%',
        height: '110%',
        marginBottom: -50,
        borderRadius: 35,
        alignItems: 'center',

    },
    Register_label: {

        marginVertical: 25,

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
        marginVertical: 20,
        width: '80%'
    },

});
