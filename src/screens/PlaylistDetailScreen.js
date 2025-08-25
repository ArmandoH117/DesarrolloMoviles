import React, { useLayoutEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PlaylistDetailScreen({ route, navigation }) {
  const { listId, titleList, songs = [] } = route.params ?? {};

  useLayoutEffect(() => {
    navigation.setOptions({ title: titleList });
  }, [navigation, titleList]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() =>
        navigation.navigate('DetalleCancion', {
          songId: item.idSong,
          title: item.valSong,      
          artist: item.artista,     
          cover: item.portada,      
          duration: item.duration ?? '—',
        })
      }>
      <Text style={styles.songTitle}>{item.valSong}</Text>
      <Text style={styles.songMeta}>{item.artista}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{titleList}</Text>
        <Text style={styles.subtitle}>Playlist #{listId}</Text>

        <FlatList
          data={songs}
          keyExtractor={(it) => String(it.idSong)}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 8 }}
          ItemSeparatorComponent={() => <View style={styles.sep} />}
          ListEmptyComponent={<Text style={styles.empty}>No hay canciones.</Text>}
        />

        <View style={{ marginTop: 16 }}>
          <TouchableOpacity style={styles.neutralBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.btnTxt}>VOLVER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16, backgroundColor: '#101015' },
  card: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#1b1b22',
    borderRadius: 12,
    padding: 16,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  title: { color: '#fff', fontSize: 20, fontWeight: '700' },
  subtitle: { color: '#bdbdbd', marginTop: 4 },
  row: { backgroundColor: '#40397cbe', paddingVertical: 12, paddingHorizontal: 14, borderRadius: 10 },
  songTitle: { color: 'white', fontSize: 16, fontWeight: '600' },
  songMeta: { color: '#a7a7b3', marginTop: 2 },
  sep: { height: 10 },
  empty: { color: '#8e8e98', marginTop: 12, textAlign: 'center' },
  neutralBtn: { backgroundColor: '#4b5bdc', paddingVertical: 12, paddingHorizontal: 18, borderRadius: 10, alignItems: 'center' },
  btnTxt: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
