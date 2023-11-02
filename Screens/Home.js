import React from "react";
import { StyleSheet, Text, View, Image, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-web";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import List from "../data/ListData.json"
export default function Home() {
  const navi = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.infoArea}>
        <View style={styles.circle}>
          <Icon name="person" size={40} color={'#a6a8aa'} />
        </View>
        <View style={styles.NameArea}>
          <Text style={styles.text_hello}>Xin chào</Text>
          <Text style={styles.text_name}>Trần Thanh Đại</Text>
        </View>
      </View>
      <View style={styles.btnArea}>
        <View style={styles.btn1}>
          <Image style={styles.imgSty} source={require('../images/icons/pic115.png')} />
          <Text style={styles.text_btn}>Khai báo</Text>
          <Text style={styles.text_btn}>Y tế</Text>
        </View>
        <View style={styles.btn2}>
          <Image style={styles.imgSty} source={require('../images/icons/pic127.png')} />
          <Text style={styles.text_btn}>Chứng nhận</Text>
          <Text style={styles.text_btn}>ngừa Covid</Text>
        </View>
        <View style={styles.btn3}>
          <Image style={styles.imgSty} source={require('../images/icons/pic129.png')} />
          <Text style={styles.text_btn}>Tư vấn</Text>
          <Text style={styles.text_btn}>sức khỏe f0</Text>
        </View>
      </View>
      <View style={styles.footerArea}>
        <FlatList
          numColumns={3}
          data={List}
          columnWrapperStyle={{ gap: 10, marginTop: 10 }}
          renderItem={({ item }) =>
            <Pressable onPress={() => { item.id == 6 ? alert('xem them') : alert('khac') }}>
              <View style={styles.item_container}>
                <Image style={styles.btn_img} source={{ uri: item.img }} />
                <View style={{ alignItems: 'center', width: 100 }}>
                  <Text>{item.name}</Text>

                </View>
              </View>
            </Pressable>

          }
        />


        <View style={styles.newpaper_text}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#353b42', }}>Cẩm nang y tế</Text>
          <Pressable>
            <Text style={{ color: '#5e83d4' }}>Tất cả</Text>

          </Pressable>
        </View>
        <FlatList

          data={[
            { name: 'Cam nang so suc khoe dien tu', img: 'https://res.cloudinary.com/dwu4fcnse/image/upload/v1698923600/images/bao1_aaacpd.jpg' },
            { name: 'Cam nang so suc khoe dien tu', img: 'https://res.cloudinary.com/dwu4fcnse/image/upload/v1698923598/images/bao2_rtputz.jpg' }

          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) =>
            <Pressable>
              <View style={styles.newpp_container}>
                <Image style={styles.pp_img} source={{ uri: item.img }} />
                <Text>{item.name}</Text>
              </View>
            </Pressable>

          }
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',

    alignItems: 'center',
    gap: 15
  },
  infoArea: {
    flexDirection: 'row',
    gap: 10,
    width: '90%',
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 70,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#99c3fb',
    shadowOpacity: 1,

    borderColor: '#3c8dfc'
  },
  NameArea: {
    justifyContent: 'center',
  },
  text_hello: {
    fontSize: 20,
    color: '#a1a1a4'
  },
  text_name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#16222a'
  },
  btn1: {
    height: 150,
    width: 100,
    backgroundColor: '#43a1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  btn2: {
    height: 150,
    width: 100,
    backgroundColor: '#61e8ad',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20

  },
  btn3: {
    height: 150,
    width: 100,
    backgroundColor: '#fe8f8a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20

  },
  imgSty: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginBottom: 5
  },
  btnArea: {
    flexDirection: 'row',
    gap: 10
  },
  text_btn: {
    color: '#fff'
  },
  footerArea: {
    width: '100%',
    height: '60%',
    backgroundColor: '#edf0f8',
    borderRadius: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  btn_img: {
    height: 70,
    width: 70,
    resizeMode: 'contain'
  },
  item_container: {
    height: 120,
    width: 120,
    gap: 10,
    alignItems: 'center',
  },
  newpaper_text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',

  },
  newpp_container: {
    width: 200,
    height: 150,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10
  },
  pp_img: {
    height: 100,
    width: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,

    marginBottom: 10,
  }


});