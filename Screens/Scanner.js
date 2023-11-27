import { View, Text, StyleSheet , Button, Linking} from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
export default function Scanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, [])

    const handleBarCodeScanned = ({type,data})=>{
        setScanned(true);
        alert(data)
        Linking.openURL(data);

    };
    if(hasPermission === null){
        return <Text>Requesting for camera permission</Text>
    }
    if(hasPermission === false){
        return <Text>No access to camera</Text>
    }
    return (
        <View style = {styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined:handleBarCodeScanned}
                style = {StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title='Nhấn để quét lại' onPress={()=> setScanned(false)} />}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
})

