import { StyleSheet,Text ,Image , ScrollView} from 'react-native';
import pins from '../../assets/data/pins';
import MasonryList from '../../components/MasonryList';

export default function CreatePin() {
  return (
    <Text>Create Pin</Text>
    // <MasonryList pins={pins} />
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
