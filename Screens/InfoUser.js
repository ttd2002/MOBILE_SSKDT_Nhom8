import React, { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"

const InfoUser = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text1}>Thông tin cá nhân</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.form_control}>
          <Text style={styles.label}>
            Họ và tên
            <Text style={{ color: "red" }}>*</Text>
          </Text>

          <TextInput style={styles.input} placeholder="Nguyễn Văn A" />
        </View>
        <View style={styles.form_control}>
          <Text style={styles.label}>
            Ngày tháng năm sinh
            <Text style={{ color: "red" }}>*</Text>
          </Text>

          <TextInput style={styles.input} placeholder="01/01/2000" />
        </View>
        <View style={styles.form_control}>
          <Text style={styles.label}>
            Số điện thoại
            <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput style={styles.input} placeholder="0123456789" />
        </View>
        <View style={styles.form_control}>
          <Text style={styles.label}>
            Số hộ chiếu/CMND/CCCD
            <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput style={styles.input} placeholder="0123456789" />
        </View>
        <View style={styles.form_control}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <Pressable style={styles.btn}>
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
  btn: {
    backgroundColor: "#2b83f9",
    width: 200,
    height: 50,
    borderRadius: 20,
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
    color: "black",
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
})
