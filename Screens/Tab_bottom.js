import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Schedule from './Schedule';
import Icon from 'react-native-vector-icons/Ionicons'
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons'

import Notify from './Notify';
import Personal from './Personal';

const Tab = createBottomTabNavigator();

const Tab_bottom = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Icon name='home' size={30} color={'#2980fd'} />
                        : <Icon name='home-outline' size={30} color={'#788088'} />

                ),
                title: 'Trang chủ'
            }} />
            <Tab.Screen name="Schedule" component={Schedule} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Icon name='calendar-sharp' size={30} color={'#2980fd'} />
                        : <Icon name='calendar-outline' size={30} color={'#788088'} />

                ),
                title: 'Lịch hẹn'
            }} />
            <Tab.Screen name='Qr' component={EmptySc} options={{
                tabBarIcon: ({ focused }) => (
                    <Pressable>
                        <View style={{ backgroundColor: '#4aaafa', height: 80, width: 80, borderRadius: 80, justifyContent: 'center', alignItems: 'center', marginBottom:10,shadowColor: '#fffff9',shadowOpacity: 1, shadowOffset:{width: 0, height: 0} }}>
                            <IconCom name='qrcode-scan' size={30} color={'white'} />
                            <Text style = {{color: 'white'}}>Quét QR</Text>
                        </View>
                    </Pressable>
                ),
                tabBarLabel: ''
            }} />
            <Tab.Screen name="Notify" component={Notify} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Icon name='notifications-sharp' size={30} color={'#2980fd'} />
                        : <Icon name='notifications-outline' size={30} color={'#788088'} />

                ),
                title: 'thông báo'
            }} />
            <Tab.Screen name="Personal" component={Personal} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Icon name='person' size={30} color={'#2980fd'} />
                        : <Icon name='person-outline' size={30} color={'#788088'} />

                ),
                title: 'Cá nhân'
            }} />

        </Tab.Navigator>
    )
}
function EmptySc() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}></View>
    );
}
export default Tab_bottom