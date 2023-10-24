import { StyleSheet, Image , ScrollView} from 'react-native';

import { Text, View } from '../../components/Themed';
import Pin from '../../components/Pin';
import pins from '../../assets/data/pins';

export default function HomeScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.column}>
        {/* <Pin pin={pins[0]} /> */}
        {pins.filter((item, index)=>index%2===0).map((pin)=>(
          <Pin pin={pin} key={pin.id} />
        ))}
      </View>
      <View style={styles.column}>
        {/* <Pin pin={pins[1]} /> */}
        {pins.filter((item, index)=>index%2===1).map((pin)=>(
          <Pin pin={pin} key={pin.id} />
        ))}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    padding: 10,
  },
  column:{
    flex:1,
  }
});
