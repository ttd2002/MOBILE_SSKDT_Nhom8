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
    Register_area: {

        backgroundColor: '#f1f9ff',
        width: '100%',
        height: '80%',
        marginBottom: '-50px',
        borderRadius: '35px',
        alignItems: 'center',

    },
    Register_label: {

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
        marginVertical: '20px',
        width: '80%'
    },

});
