import { View, Text, Pressable, StyleSheet, Image } from "react-native"
import React, { useEffect, useState } from "react"
import QRCode from "react-native-qrcode-svg"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/Ionicons"
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
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.info1}>
          <View style={styles.circle}>
            <Icon name="person" size={40} color={"#B4B4B4"} />
          </View>
          <View>
            <Text style={styles.text1}>CBT</Text>
            <Text style={styles.text2}>0123456789</Text>
          </View>
        </View>
        <Pressable style={styles.logout} onPress={onPressLogout}>
          <Image
            style={{ width: 25, height: 30 }}
            source={require("../images/exit.png")}
          />
        </Pressable>
      </View>
      <View style={styles.qrcode}>
        <View style={styles.viewQR}>
          <QRCode value={qrCode} />
        </View>
        <Text style={styles.text2}>Mã sổ sức khoẻ</Text>
      </View>

      <View style={styles.more}>
        <Pressable style={styles.btn}>
          <Icon name="person" size={23} color={"#5D5D5D"} />
          <Text style={styles.text3}>Thông tin cá nhân</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Icon name="people" size={23} color={"#5D5D5D"} />
          <Text style={styles.text3}>Thành viên gia đình</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Icon name="map" size={23} color={"#5D5D5D"} />
          <Text style={styles.text3}>Nơi đã đến</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Icon name="time" size={23} color={"#5D5D5D"} />
          <Text style={styles.text3}>Lịch sử đặt khám</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Icon name="book" size={23} color={"#5D5D5D"} />
          <Text style={styles.text3}>Hộ chiếu vắc-xin</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Icon name="information-circle" size={23} color={"#5D5D5D"} />
          <Text style={styles.text3}>Giới thiệu</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Icon name="settings" size={23} color={"#5D5D5D"} />
          <Text style={styles.text3}>Cài đặt</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={onPressLogout}>
          <Icon name="exit" size={23} color={"#5D5D5D"} />
          <Text style={styles.text3}>Đăng xuất</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Personal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A99FF",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    // backgroundColor: "#FFE4E4",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomColor: "#BABABA",
    borderBottomWidth: 1,
  },
  more: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "63%",
    alignItems: "center",
    justifyContent: "flest-start",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  qrcode: {
    // backgroundColor: "#7A5D5D",
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  viewQR: {
    backgroundColor: "#ffffff",
    width: 120,
    height: 120,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    // backgroundColor: "#D8E2EF",
    width: "100%",
    height: "12%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "2%",
  },
  info1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    border: "5px solid #90BEFF",
    backgroundColor: "#ffffff",
    marginRight: 10,
  },
  logout: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  text2: {
    fontSize: 15,
    color: "#ffffff",
    fontWeight: "medium",
    marginTop: 5,
  },
  text3: {
    fontSize: 15,
    color: "#5D5D5D",
    fontWeight: "medium",
    marginHorizontal: 8,
  },
})
