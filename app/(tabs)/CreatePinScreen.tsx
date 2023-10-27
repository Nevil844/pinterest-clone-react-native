import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-gesture-handler';
import { useNhostClient } from '@nhost/react';
import { useNavigation } from '@react-navigation/native';


const CREATE_PIN_MUTATION = `
mutation MyMutation ($image: String!, $title: String){
  insert_pins(objects: {image: $image , title: $title}) {
    returning {
      created_at
      id
      image
      title
      user_id
    }
  }
}

`;

export default function CreatePinScreen() {
  const [imageUri, setImageUri] = useState<null | string>(null);
  const [title, setTitle] = useState('');

  const nhost=useNhostClient();
  const navigation=useNavigation();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImageUri(result.uri);
    }
  };

  const uploadFile=async()=>{
    if(!imageUri){
      return{
        error:{
          message:"No image selected"
      }};
    }
    const uri=Platform.OS==="ios" ? imageUri.replace("file://","") : imageUri;

    const result=await nhost.storage.upload({
      file:{
        name:"123.png",
      type:"image/png",
      uri,
      }}
    );
      return result;
  }

  const onSubmit = async() => {

    const uploadResult= await uploadFile();

    if(uploadResult.error){
      Alert.alert('Error uploading image',uploadResult.error.message);
      return;
    }

    const result=await nhost.graphql.request(CREATE_PIN_MUTATION,{
      title,
      image:uploadResult.fileMetadata.id,
    });
    console.log(result);
    if(result.error){
      Alert.alert('Error creating post',result.error.message);
    }else{
      navigation.goBack();
    }
  };

  return (
    <View style={styles.root}>
      <Button title="Upload your Pin" onPress={pickImage} />
      {imageUri && (
      <>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <TextInput placeholder='Title...' value={title} onChangeText={setTitle} style={styles.input} />
        <Button title="Submit Pin" onPress={onSubmit} />
      </>
    )}
    </View>
  );
}

const styles=StyleSheet.create({
  root:{
    padding:10,
    flex: 1, alignItems: 'center', justifyContent: 'center' 
  },
  image:{
    width:"100%",
    aspectRatio:1,
    marginVertical:10,
  },
  input:{
    borderWidth:1,
    borderColor:'gainsboro',
    padding:5,
    width: "100%",
    borderRadius:5,
  }
})
