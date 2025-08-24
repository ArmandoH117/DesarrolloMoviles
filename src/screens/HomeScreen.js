// src/screens/HomeScreen.js
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {/* LOGO local (ajusta la ruta si tu logo está en otra carpeta) */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>BMusic</Text>
        <Text style={styles.subtitle}>Tu música, tus playlists.</Text>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Text style={styles.primaryTxt}>Ir a tu Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={() => navigation.navigate('DetallePlaylist', { listId: '1', titleList: 'Recomendadas' })}
        >
          <Text style={styles.secondaryTxt}>Explorar Recomendadas</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Hecho con React Native + Expo</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16, backgroundColor: '#101015' },
  card: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#1b1b22',
    borderRadius: 12,
    padding: 20,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 16,
    marginBottom: 10,
  },
  title: { color: '#fff', fontSize: 26, fontWeight: '800', marginTop: 6 },
  subtitle: { color: '#bdbdbd', marginTop: 6, textAlign: 'center' },
  primaryBtn: {
    marginTop: 18,
    backgroundColor: '#4b5bdc',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  primaryTxt: { color: '#fff', fontSize: 16, fontWeight: '700' },
  secondaryBtn: {
    marginTop: 10,
    backgroundColor: '#22222b',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a35',
  },
  secondaryTxt: { color: '#d6d6e3', fontSize: 15, fontWeight: '600' },
  footer: { color: '#6f6f78', fontSize: 12, marginTop: 16 },
});
