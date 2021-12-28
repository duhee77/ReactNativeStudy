import React from 'react';
import {View, Text} from 'react-native';
import NativeStatusBarManager from 'react-native/Libraries/Components/StatusBar/NativeStatusBarManagerAndroid';

function nuna() {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <View onclick>
        <View></View>
        <Text></Text>
      </View>
      <View>
        <View></View>
        <Text></Text>
      </View>
      <View>
        <View></View>
        <Text></Text>
      </View>
    </>
  );
}

nuna.defaultProps = {
  name: '리액트 네이티브',
};

export default nuna;
