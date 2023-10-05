import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-web";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.info_area}>
        <Image
          style={styles.info_img}
          source={require("../images/icons/pic145.png")}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.info_text1}>Nguyen Van A</Text>
          <Text style={styles.info_text2}>0123456789</Text>
        </View>
      </View>
      <View style={styles.node_area}>
        <View style={styles.node_khaiBao}>
          <Image
            style={styles.node_img}
            source={require("../images/icons/pic115.png")}
          />
          <Text style={styles.node_text}>
            Khai báo <br />y tế
          </Text>
        </View>
        <View style={styles.node_chungNhan}>
          <Image
            style={styles.node_img}
            source={require("../images/icons/pic127.png")}
          />
          <Text style={styles.node_text}>
            Chứng nhận <br />
            ngừa Covid
          </Text>
        </View>
        <View style={styles.node_tuVanF0}>
          <Image
            style={styles.node_img}
            source={require("../images/icons/pic129.png")}
          />
          <Text style={styles.node_text}>
            Tư vấn <br />
            sức khoẻ
          </Text>
        </View>
      </View>
      <View style={styles.btn_earea}>
        <View style={styles.btn_earea1}>
          <View style={styles.btn_earea3}>
            <Image
              style={styles.btn_img}
              source={require("../images/icons/pic120.png")}
            />
            <Text style={styles.btn_img_txt}>
              Hộ chiếu <br /> vắc xin
            </Text>
          </View>

          <View style={styles.btn_earea3}>
            <Image
              style={styles.btn_img}
              source={require("../images/icons/pic132.png")}
            />
            <Text style={styles.btn_img_txt}>
              Đăng ký <br /> tiêm chủng
            </Text>
          </View>

          <View style={styles.btn_earea3}>
            <Image
              style={styles.btn_img}
              source={require("../images/icons/pic124.png")}
            />
            <Text style={styles.btn_img_txt}>
              Đặt lịch <br /> khám
            </Text>
          </View>
        </View>
        <View style={styles.btn_earea1}>
          <View style={styles.btn_earea3}>
            <Image
              style={styles.btn_img}
              source={require("../images/icons/pic118.png")}
            />
            <Text style={styles.btn_img_txt}>
              Hồ sơ <br /> sức khoẻ
            </Text>
          </View>

          <View style={styles.btn_earea3}>
            <Image
              style={styles.btn_img}
              source={require("../images/icons/pic125.png")}
            />
            <Text style={styles.btn_img_txt}>
              Phản ánh <br /> tiêm chủng
            </Text>
          </View>

          <View style={styles.btn_earea3}>
            <Image
              style={styles.btn_img}
              source={require("../images/icons/pic119.png")}
            />
            <Text style={styles.btn_img_txt}>
              Dịch vụ <br /> khác
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ffffff",
    // backgroundImage: "linear-gradient(to right, #FFFFFF, #A8DAFA)",
    // alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  info_area: {
    flexDirection: "row",
    width: "100%",
    height: "12%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  info_text1: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#585858",
  },
  info_text2: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#585858",
    marginTop: 2,
  },
  info_img: {
    width: 75,
    height: 75,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 40,
    marginLeft: 15,
    border: "2px solid rgba(71, 154, 251)",
  },
  node_img: {
    width: 60,
    height: 60,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 15,

    border: "5px solid rgba(255, 255, 255, 0.25)",
  },
  node_text: {
    fontSize: 15,
    fontWeight: "medium",
    color: "white",
    marginTop: 5,
    textAlign: "center",
  },
  node_area: {
    flexDirection: "row",
    width: "100%",
    height: "27%",
    backgroundColor: "#transparent",
    alignItems: "center",
    justifyContent: "space-around",
  },

  node_khaiBao: {
    backgroundImage: "linear-gradient(40deg, #3390fb, #55bbfb)",
    width: "29%",
    height: "85%",
    alignItems: "center",
    borderRadius: 15,
  },
  node_chungNhan: {
    backgroundImage: "linear-gradient(40deg, #21CCBA, #69EDAC)",
    width: "29%",
    height: "85%",
    alignItems: "center",
    borderRadius: 15,
  },
  node_tuVanF0: {
    backgroundImage: "linear-gradient(40deg, #FF6861, #FD928D)",
    width: "29%",
    height: "85%",
    alignItems: "center",
    borderRadius: 15,
  },
  btn_earea1: {
    width: "85%",
    height: "35%",
    backgroundColor: "#transparent",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginTop: 8,
  },
  btn_earea3: {
    width: "30%",
    height: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_earea: {
    flexDirection: 1,
    flexWrap: "wrap",
    width: "100%",
    height: "60%",
    backgroundColor: "#EEF1F8",
    // backgroundImage: "linear-gradient(40deg, #3390fb, #55bbfb)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btn_img: {
    border: "1px solid rgba(137, 208, 255, 0.2)",
    borderWidth: 1,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  btn_img_txt: {
    fontSize: 15,
    fontWeight: "medium",
    color: "#585858",
    marginTop: 5,
    textAlign: "center",
  },
});
