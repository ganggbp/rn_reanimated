import {View, Text, Image} from 'react-native';
import React from 'react';
import {PinchGestureHandler} from 'react-native-gesture-handler';

const imageUri =
  'https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';

const PinchGestureHandlerBasic = () => {
  return (
    <PinchGestureHandler>
      <Image source={{uri: imageUri}} style={{flex: 1}} />
    </PinchGestureHandler>
  );
};

export default PinchGestureHandlerBasic;
