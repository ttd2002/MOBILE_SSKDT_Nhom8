import React, { useEffect, useState } from "react"
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import QRCode from "react-native-qrcode-svg"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/Ionicons"

const InfoUser = () => {
  const naviIn = useNavigation();
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState("")
  const [name, setName] = useState("")
  const [birthDay, setBirthDay] = useState("")
  const [id, setId] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [address, setAddress] = useState("")

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
            setUserId(element.userId)
            setBirthDay(element.birthDay)
            setId(element.id)
            setEmail(element.email)
            setGender(element.gender)
            setAddress(element.address)
          }
        })
      })
      .catch((e) => console.log(e))
    setLoading(false)
  }
  const ResetName = (name, birthDay, gender, id, email, address) => {
    users.forEach((element) => {
      if (element.userId === userId) {
        editName(userId, name, birthDay, gender, id, email, address)
        alert("Lưu thông tin thành công!")
      }
    })
  }
  const editName = (userId, name, birthDay, gender, id, email, address) => {
    fetch("https://653f4af99e8bd3be29e02de4.mockapi.io/user/" + `/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        'userName': name,
        'birthDay': birthDay,
        'gender': gender,
        'id': id,
        'email': email,
        'address': address,

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
      <View style={styles.container1}>
        <Pressable onPress={()=>{
            naviIn.navigate('Tab_bottom')
          }}>
          <View style={styles.title1} >
            <Icon name="arrow-back-outline" size={28} color={"#FFFFFF"} />
          </View>
        </Pressable>
        <Text style={styles.text1}>Chỉnh sửa thông tin cá nhân</Text>
      </View>
      <View style={styles.container2}>
        <View>
          <Image
            style={styles.image}
            source={require("../images/1_0001_Layer-2.png")}
          />
        </View>
        <View style={styles.form_control}>
          <Text style={styles.label}>
            Họ và tên:
            <Text style={{ color: "red" }}> *</Text>
          </Text>
          <TextInput
            value={name}
            onChangeText={(text) => {
              setName(text)
            }}
            style={styles.input}
          />
        </View>
        <View style={styles.form_control}>
          <Text style={styles.label}>
            Ngày tháng năm sinh
            <Text style={{ color: "red" }}>*</Text>
          </Text>

          <TextInput style={styles.input} value={birthDay} onChangeText={(text) => {
            setBirthDay(text)
          }} />
        </View>
        <View style={styles.form_control}>
          <Text style={styles.label}>
            Giới tính
            <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput style={styles.input} value={gender} onChangeText={(text) => {
            setGender(text)
          }}/>

        </View>
        <View style={styles.form_control}>
          <Text style={styles.label}>
            Số điện thoại
            <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput style={styles.input} value={phone} editable={false} />
        </View>
        <View style={styles.form_control}>
          <Text style={styles.label}>
            Số hộ chiếu/CMND/CCCD
            <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput style={styles.input} value={id} onChangeText={(text) => {
            setId(text)
          }}/>
        </View>
        <View style={styles.form_control}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} value={email} onChangeText={(text) => {
            setEmail(text)
          }}/>
        </View>

        <View style={styles.form_control}>
          <Text style={styles.label}>Địa chỉ</Text>
          <TextInput style={styles.input} value={address} onChangeText={(text) => {
            setAddress(text)
          }}/>
        </View>
        <Pressable
          onPress={() => {
            if (name === "" || birthDay === "" || gender === "" || id === "" || email === "" || address === "") {
              alert("Vui lòng nhập đầy đủ họ tên!")
            } else ResetName(name, birthDay, gender, id, email, address)
          }}
          style={styles.btn}
        >
          <Text style={styles.text1}>Lưu thông tin</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default InfoUser
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b83f9",
    //backgroundImage: 'linear-gradient(to right, #2b83f9, #47a6fa)',
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flexDirection: 'row',
    // backgroundColor: "#B9DDFF",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "12%",
  },
  container2: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "88%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    borderWidth: 3,
    borderColor: "#3E91FF",
  },
  btn: {
    backgroundColor: "#3E91FF",
    width: 200,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    color: "gray",
    marginBottom: 4,
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: "100%",
    borderRadius: 10,
    color: "#292929",
  },
  form_control: {
    width: "100%",
    marginVertical: 2,
  },
  form_radio: {
    width: "100%",
    marginVertical: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  text2: {
    fontSize: 15,
    fontWeight: "regular",
    color: "#FFFFFF",
  },
  title1: {
    // backgroundColor: "#FFD6D6",
    width: "10%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
})
