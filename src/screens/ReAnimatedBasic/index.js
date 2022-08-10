import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

const SIZE = 100.0;

const ReanimatedBasic = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const handleRotation = progress => {
    'worklet';

    return `${progress.value * 2 * Math.PI}rad`;
  };

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [{scale: scale.value}, {rotate: handleRotation(progress)}],
    };
  });

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Reanimated2 Basic</Text>
      <View style={styles.center}>
        <Animated.View style={[styles.square, rStyle]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'blue',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReanimatedBasic;
