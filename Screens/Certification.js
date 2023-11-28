import { View, Text, Pressable, StyleSheet, Image } from "react-native"
import React, { useEffect, useState } from "react"
import QRCode from "react-native-qrcode-svg"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/Ionicons"
const Certification = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
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
            setName(element.userName)
            setPhone(element.phone)
          }
        })
      })
      .catch((e) => console.log(e))
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={styles.title1}>
          <Icon name="arrow-back-outline" size={28} color={"#FFFFFF"} />
        </View>
        <View style={styles.title2}>
          <Text style={styles.text1}>Chứng nhận ngừa Covid:</Text>
        </View>
      </View>
      <View style={styles.cetification}>
        <Image
          style={{ width: 50, height: 60 }}
          source={require("../images/chungNhan_0000_Layer-1.png")}
        />
        <Text style={styles.text2}>ĐÃ TIÊM 04 MŨI VACCINE</Text>
        <View style={styles.qrcode}>
          <View style={styles.viewQR}>
            <QRCode value={qrCode} />
          </View>
        </View>
        {/* <Image
          style={{ width: 120, height: 120, margin: 10 }}
          source={require("../images/chungNhan_0001_Layer-2.png")}
        /> */}
        <Text style={styles.text1}>Thông tin cá nhân:</Text>
        <View style={styles.info}>
          <View style={styles.info1}>
            <Icon name="person" size={23} color={"#5D5D5D"} />
            <View>
              <Text style={styles.text4}>Họ và tên:</Text>
              <Text style={styles.text3}>{name}</Text>
            </View>
          </View>
          <View style={styles.info1}>
            <Icon name="calendar-outline" size={23} color={"#5D5D5D"} />
            <View>
              <Text style={styles.text4}>Ngày sinh:</Text>
              <Text style={styles.text3}>01/01/2000</Text>
            </View>
          </View>
          <View style={styles.info1}>
            <Icon name="newspaper-outline" size={23} color={"#5D5D5D"} />
            <View>
              <Text style={styles.text4}>Số điện thoại liên lạc:</Text>
              <Text style={styles.text3}>{phone}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Certification

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007B47",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
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
    width: 100,
    height: 100,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    height: "34%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  info1: {
    // backgroundColor: "#9C9C9C",
    width: "80%",
    height: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomColor: "#BABABA",
  },
  cetification: {
    // backgroundColor: "#699C65",
    width: "100%",
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flexDirection: "row",
    // backgroundColor: "#D9FFD6",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title1: {
    // backgroundColor: "#FFD6D6",
    width: "10%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title2: {
    // backgroundColor: "#FFD6D6",
    width: "80%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  text2: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
  },
  text3: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5D5D5D",
    marginLeft: 10,
  },
  text4: {
    fontSize: 12,
    fontWeight: "regular",
    color: "#5D5D5D",
    marginLeft: 10,
    marginBottom: 5,
  },
})
