// src/screens/PlaylistDetailScreen.js
import React, { useMemo } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PlaylistDetailScreen({ route, navigation }) {
  const { listId, titleList } = route.params ?? {};

  // Cada canción tiene SOLO audioUrl (streaming)
  const songsByList = useMemo(() => ({
    '1': [
      { id: '101', title: 'Warm Up Beat', artist: 'DJ Fit', duration: '3:12',
        cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
        audioUrl: 'https://www.example.com/audio/warmup.mp3' },
      { id: '102', title: 'Pump It Now', artist: 'Energy Crew', duration: '2:58',
        cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
        audioUrl: 'https://www.example.com/audio/pumpit.mp3' },
    ],
    '2': [
      { id: '201', title: 'Pop Vibes', artist: 'Nova', duration: '3:35',
        cover: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81a',
        audioUrl: 'https://www.example.com/audio/popvibes.mp3' },
      { id: '202', title: 'Night Lights', artist: 'Aqua', duration: '4:04',
        cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
        audioUrl: 'https://www.example.com/audio/nightlights.mp3' },
    ],
    '3': [
      { id: '301', title: 'Back to 80s', artist: 'RetroWave', duration: '3:49',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
        audioUrl: 'https://www.example.com/audio/80s.mp3' },
    ],
    '4': [
      { id: '401', title: 'LoFi Breeze', artist: 'Chillhop', duration: '2:43',
        cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
        audioUrl: 'https://www.example.com/audio/lofi.mp3' }, // ← pon aquí tu LoFi
    ],
  }), []);

  const data = songsByList[String(listId)] ?? [];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() =>
        navigation.navigate('DetalleCancion', {
          songId: item.id,
          title: item.title,
          artist: item.artist,
          cover: item.cover,
          duration: item.duration,
          audioUrl: item.audioUrl, // SOLO URL
        })
      }>
      <Text style={styles.songTitle}>{item.title}</Text>
      <Text style={styles.songMeta}>{item.artist} • {item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{titleList}</Text>
        <Text style={styles.subtitle}>Playlist #{listId}</Text>

        <FlatList
          data={data}
          keyExtractor={(it) => it.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 8 }}
          ItemSeparatorComponent={() => <View style={styles.sep} />}
          ListEmptyComponent={<Text style={styles.empty}>No hay canciones.</Text>}
        />

        {/* Botón VOLVER */}
        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backTxt}>VOLVER</Text>
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
  row: {
    backgroundColor: '#22222b',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  songTitle: { color: 'white', fontSize: 16, fontWeight: '600' },
  songMeta: { color: '#a7a7b3', marginTop: 2 },
  sep: { height: 10 },
  empty: { color: '#8e8e98', marginTop: 12, textAlign: 'center' },
  backBtn: {
    backgroundColor: '#44445a',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  backTxt: { color: 'white', fontSize: 16, fontWeight: '600' },
});
