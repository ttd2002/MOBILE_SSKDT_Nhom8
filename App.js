import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Screen_login from "./Screens/Login"
import Screen_forgot_pass from "./Screens/Forgot_passwword"
import Screen_Register from "./Screens/Register"
import Home from "./Screens/Home"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import CustomHeader from "./Components/Header"
import Tab_bottom from "./Screens/Tab_bottom"
import Scanner from "./Screens/Scanner"
import Schedule from "./Screens/Schedule"
import Notify from "./Screens/Notify"
import Personal from "./Screens/Personal"
import Cetification from "./Screens/Certification"
import HealthFacilities from "./Screens/HealthFacilities"
import InfoUser from "./Screens/InfoUser"
import More from "./Screens/More"
import Declare from "./Screens/Declare"
import Passpore from "./Screens/Passpore"
import ResVacxin from "./Screens/ResVacxin"
import DocHealth from "./Screens/DocHealth"
import Advise from "./Screens/Advise"
import HandBook from "./Screens/HandBook"

const Stack = createStackNavigator()

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitle: () => <CustomHeader />,
          headerStyle: {
            height: 180,
            backgroundColor: "#2b83f9",
          },
          headerLeftContainerStyle: {
            marginTop: -40,
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Login" component={Screen_login} />
        <Stack.Screen name="Forgot_password" component={Screen_forgot_pass} />
        <Stack.Screen name="Register" component={Screen_Register} />
        <Stack.Screen name="Certification" component={Cetification} options={{headerShown: false}} />
        <Stack.Screen name="InfoUser" component={InfoUser} options={{headerShown: false}}/>
        <Stack.Screen name="HealthFacilities" component={HealthFacilities} options={{headerShown: false}}/>
        <Stack.Screen name="More" component={More} options={{headerShown: false}}/>
        <Stack.Screen name="Declare" component={Declare} options={{headerShown: false}}/>
        <Stack.Screen name="Passpore" component={Passpore} options={{headerShown: false}}/>
        <Stack.Screen name="ResVacxin" component={ResVacxin} options={{headerShown: false}}/>
        <Stack.Screen name="DocHealth" component={DocHealth} options={{headerShown: false}}/>
        <Stack.Screen name="Advise" component={Advise} options={{headerShown: false}}/>
        <Stack.Screen name="HandBook" component={HandBook} options={{headerShown: false}}/>

        <Stack.Screen
          options={{ headerShown: false }}
          name="Tab_bottom"
          component={Tab_bottom}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
