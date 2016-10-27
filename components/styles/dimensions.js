'use strict';

import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default {
  width: width,
  height: height,

  boardContainer: {
    width: width * .95
  },

  mathButton: {
    width: width * .15
  },


}
