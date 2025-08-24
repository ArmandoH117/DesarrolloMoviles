import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

export default function SongDetailScreen({ route, navigation }) {
  const { songId, title, artist, cover, duration } = route.params ?? {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: cover }}
          style={styles.cover}
        />
        <View style={{ marginTop: 14 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{artist}</Text>
          <Text style={styles.caption}>Duración • {duration}</Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <Button title="Reproducir (placeholder)" onPress={() => {}} />
          <View style={{ height: 8 }} />
          <Button title="Volver a la playlist" onPress={() => navigation.goBack()} />
        </View>

        <Text style={styles.footerId}>ID pista: {songId}</Text>
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
  cover: { width: '100%', height: 260, borderRadius: 12, borderWidth: 1, borderColor: '#2a2a35' },
  title: { color: '#fff', fontSize: 22, fontWeight: '700' },
  subtitle: { color: '#bdbdbd', marginTop: 4, fontSize: 16 },
  caption: { color: '#8e8e98', marginTop: 8 },
  footerId: { marginTop: 16, color: '#6f6f78', fontSize: 12, textAlign: 'right' },
});
