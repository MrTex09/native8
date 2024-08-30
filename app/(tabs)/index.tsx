import React, { useState, useEffect } from 'react';
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState('#1E90FF');
  const titlePosition = useSharedValue(-100);
  const titleOpacity = useSharedValue(1); 


  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titlePosition.value }],
      opacity: titleOpacity.value,
    };
  });

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor,
    };
  });

   useEffect(() => {
    titlePosition.value = withTiming(0, { duration: 1000 }); 
  }, []);
  const handleStartPress = () => {
    titleOpacity.value = withTiming(0, { duration: 500 });
    setBackgroundColor('#FF6347'); 
  };
  return (
    <Animated.View style={[styles.container, animatedBackgroundStyle]}>
      <Animated.Text style={[styles.title, animatedTitleStyle]}>
        Bienvenido
      </Animated.Text>
      <TouchableOpacity style={styles.button} onPress={handleStartPress}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#1E90FF',
  },
});

export default Home;
