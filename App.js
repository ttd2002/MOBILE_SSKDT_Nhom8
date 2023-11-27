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

const Stack = createStackNavigator()

export default function App() {
  return (
    //<Screen_login/>
    //<Screen_forgot_pass/>
    //<Screen_Register/>
    // <Home />
    // <Schedule />
    // <Notify />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitle: () => <CustomHeader />,
          headerStyle: {
            height: 200,
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
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tab_bottom"
          component={Tab_bottom}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
