import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Custominput from '../Components/CustomInput.js';
import CustomButton from '../Components/CustomButton.js';
function Screen_Register() {
    const [fullName, setfullName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setpassword] = useState('');

    const onPressRegister = () => {
        alert('Register');
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
                    <Custominput placeholder='Nhập nội dung' value={password} setValue={setpassword} />
                </View>
                <View style={styles.input_area}>
                    <Text style={styles.Text_Style}> <Text style={{ color: 'red' }}>*</Text> Vui lòng cung cấp thông tin chính xác để đảm bảo công tác phòng chống dịch Covid-19 và nhận chứng nhận tiêm chủng</Text>
                </View>
                <View style={styles.button_area}>
                    <CustomButton text={"Đăng ký"} onPress={onPressRegister} />
                </View>


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
