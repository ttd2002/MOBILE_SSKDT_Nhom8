import { View, Text, Pressable } from "react-native"
import React, { useEffect, useState } from "react"
import QRCode from "react-native-qrcode-svg"
import { useNavigation } from "@react-navigation/native"
const Personal = () => {
  const naviPer = useNavigation()
  const [users, setUsers] = useState([])
  const [qrCode, setQrCode] = useState(
    "https://653f4af99e8bd3be29e02de4.mockapi.io/user"
  )
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getUser()
  }, [qrCode])
  const getUser = async () => {
    setLoading(true)
    await fetch("https://653f4af99e8bd3be29e02de4.mockapi.io/user")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res)
        res.forEach((element) => {
          if (element.login) {
            setQrCode(element.qrCode)
          }
        })
      })
      .catch((e) => console.log(e))
    setLoading(false)
  }
  const onPressLogout = () => {
    getUsers()
    users.forEach((element) => {
      if (element.login) {
        editLoginStatus(element.userId)
      }
    })
    naviPer.navigate("Login")
  }
  const getUsers = async () => {
    setLoading(true)
    await fetch("https://653f4af99e8bd3be29e02de4.mockapi.io/user")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res)
      })
      .catch((e) => console.log(e))
    setLoading(false)
  }
  const editLoginStatus = (userId) => {
    fetch("https://653f4af99e8bd3be29e02de4.mockapi.io/user/" + `/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        login: false,
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
    <View>
      <QRCode value={qrCode} />
      <Pressable
        style={{ padding: 10, backgroundColor: "blue" }}
        onPress={onPressLogout}
      >
        <Text>Đăng xuất</Text>
      </Pressable>
    </View>
  )
}

export default Personal
