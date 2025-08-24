import { Button, Text, View } from 'react-native';

// Pantalla dentro del Stack: "Inicio"
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 12 }}>🏠 HomeScreen</Text>
      <Text style={{ marginBottom: 20 }}>Pila: Stack — Estás en Inicio</Text>

      <Button
        title="Ir a Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}
