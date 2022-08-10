import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
} from 'react-native';

import DraggableFAB from '../../components/DraggableFAB';
import SubButton from '../../components/DraggableFAB/SubButton';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, marginHorizontal: 20}}>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('ReanimatedBasic')}>
          1. ReanimatedBasic
        </Text>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('PangestureBasic')}>
          2. PangestureBasic
        </Text>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('InterpolateWithScrollView')}>
          3. InterpolateWithScrollView
        </Text>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('InterpolateColor')}>
          4. InterpolateColor
        </Text>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('PinchGestureHandler')}>
          5. PinchGestureHandler
        </Text>
      </ScrollView>

      <DraggableFAB>
        <SubButton onPress={() => Alert.alert('Pressed 1!')} label="1" />
        <SubButton onPress={() => Alert.alert('Pressed 2!')} label="2" />
        <SubButton onPress={() => Alert.alert('Pressed 3!')} label="3" />
        <SubButton onPress={() => Alert.alert('Pressed 4!')} label="4" />
      </DraggableFAB>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
