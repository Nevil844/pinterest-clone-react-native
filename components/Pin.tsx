import {View, Image, Text, StyleSheet, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useNhostClient } from '@nhost/react';
import RemoteImage from './RemoteImage';

const Pin=(props)=>{
    const {id,image, title}=props.pin;
    const [imageUri, setImageUri] = useState("");

    const [ratio,setRatio]=useState(1);
    const navigation=useNavigation();
    const nhost=useNhostClient();

    const onLike=()=>{};



    const goToPinPage=()=>{
      navigation.navigate("PinScreen", {id});
    };

    return(
        <Pressable onPress={goToPinPage} style={styles.pin}>
        <View>
       <RemoteImage fileId={image} />
        <Pressable onPress={onLike} style={styles.heartBtn}>
            <AntDesign name="hearto" size={24} color="black" />
        </Pressable>
        </View>
      

   

      <Text style={styles.title} numberOfLines={2}>{title}</Text>
    </Pressable>
    )
}

const styles=StyleSheet.create({
    pin:{
        width:"100%",
        padding:4,
      },
      title: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "600",
        margin:5,
        color:"#181818"
      },
      image:{
        width:'100%',
        borderRadius:15,
      },
      heartBtn:{
        backgroundColor: "#D3CFD4",
        position:'absolute',
        bottom:10,
        right:10,
        padding:5,
        borderRadius:50,
      }
})

export default Pin;