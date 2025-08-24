import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {

  const [userName] = useState('AfedoH117');

  const myPlayList = [
    { id: '1', value: 'Canciones para hacer ejercicio' },
    { id: '2', value: 'Pop Music' },
    { id: '3', value: 'Rock clásico' },
    { id: '4', value: 'LoFi para estudiar' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.btn}
      onPress={() =>
        navigation.navigate('DetallePlaylist', {
          listId: item.id,
          titleList: item.value,
        })
      }
    >
      <Text style={styles.txtBtn}>{item.value}</Text>
    </TouchableOpacity>
    
  );

  return (
    <SafeAreaView style={styles.container}>
      {}
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.viewImg}>
            <Image
              source={{
                uri: 'https://i1.sndcdn.com/artworks-000427032654-6q5sf7-t500x500.jpg',
              }}
              style={{ width: 100, height: 100, borderRadius: 8 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Perfil</Text>
            <Text style={styles.subtitle}>@{userName}</Text>
            <Text style={styles.caption}>Playlists recientes</Text>
          </View>
        </View>

        {}
        <FlatList
          data={myPlayList}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          style={{ marginTop: 10 }}
          contentContainerStyle={{ paddingBottom: 8 }}
        />
      </View>

      {}
      <View style={{ marginTop: 12 }}>
        <Button title="Regresar a Inicio" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16, backgroundColor: '#101015' },
  card: {
    width: Math.min(width - 24, 480),
    backgroundColor: '#1b1b22',
    borderRadius: 12,
    padding: 16,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  header: { flexDirection: 'row', gap: 16, alignItems: 'center' },
  viewImg: {
    width: 100, height: 100, borderRadius: 8, overflow: 'hidden',
    borderWidth: 1, borderColor: '#2a2a35',
  },
  title: { color: '#fff', fontSize: 20, fontWeight: '700' },
  subtitle: { color: '#bdbdbd', marginTop: 2 },
  caption: { color: '#8e8e98', marginTop: 6 },
  btn: {
    backgroundColor: '#4b5bdc',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  txtBtn: { 
    fontSize: 16, 
    color: 'white', 
    textAlign: 'left' 
  },
});

