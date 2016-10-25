import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default {
  boardContainer: {
    width: width * .8
  }
}
