import { StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import MasonryList from '../../components/MasonryList';
import pins from '../../assets/data/pins';
import { Feather, Entypo } from '@expo/vector-icons';
import { useSignOut } from '@nhost/react';

export default function ProfileScreen() {

  const {signOut}=useSignOut();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>

        <View style={styles.icons}>
          <Pressable onPress={signOut}>
            <Feather name='share' size={24} color="black" style={styles.icons} />
          </Pressable>
          <Entypo name='dots-three-vertical' size={24} color="black" style={styles.icons} />
        </View>
      <Image 
      source={{
        uri:"https://avatars.githubusercontent.com/u/56132780?v=4"
      }}
      style={styles.image}
      />
      <Text style={styles.title}>Nevil Jobanputra</Text>
      <Text style={styles.subtitle}>123 Followers | 534 Followings</Text>

      </View>
      
      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:10,
  },
  subtitle:{
    color:"#181818",
    fontWeight:"600",
    margin:10,
  },
  header:{
    alignItems:"center",
  },
  image:{
    width:200,
    aspectRatio:1,
    borderRadius:200,
    marginVertical: 10,
  },
  icons:{
    flexDirection:"row",
    alignSelf:"flex-end",
    padding:10,
  },
  icon:{
    paddingHorizontal:10,
  }
});
