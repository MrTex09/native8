//importaciones 
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

const Home = () => {
  // state para manejar el color de fondo de la vista
  const [backgroundColor, setBackgroundColor] = useState('#1E90FF');
  
  // valores compartidos para animación (posición y opacidad del título)
  const titlePosition = useSharedValue(-100); // inicia la posicion del titulo
  const titleOpacity = useSharedValue(1); // opacidad a 1

  // estilo animado para el titulo 
  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titlePosition.value }], // animacion de traslado en y
      opacity: titleOpacity.value, // animacion de opacidad
    };
  });

  // estilo animado para el fondo
  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor, //cambio de color del fondo
    };
  });

  // useEffect para ejecutar animación cuando el componente "inicia"
  useEffect(() => {
    titlePosition.value = withTiming(0, { duration: 1000 }); //animacionde entrada del titulo
  }, []);

  // Maneja el evento de presionar el botón
  const handleStartPress = () => {
    titleOpacity.value = withTiming(0, { duration: 500 }); // animacion de desvanecimiento del titulo
    setBackgroundColor('#FF6347'); // Cambio del color de fondo
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
