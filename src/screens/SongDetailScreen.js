import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function SongDetailScreen({ route, navigation }) {
  const { songId, title, artist, cover, duration } = route.params ?? {};
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying((p) => !p);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {}
        <Image source={{ uri: cover }} style={styles.cover} />

        {}
        <View style={{ marginTop: 14 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{artist}</Text>
          <Text style={styles.caption}>Duración • {duration}</Text>
        </View>

        {}
        <View style={{ marginTop: 18 }}>
          <View style={styles.progressTimes}>
            <Text style={styles.timeTxt}>0:46</Text>
            <Text style={styles.timeTxt}>{duration || '3:52'}</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
            <View style={styles.progressThumb} />
          </View>
        </View>

        {}
        <View style={styles.controls}>
          <TouchableOpacity style={styles.ctrlSmall} onPress={() => {}}>
            <Ionicons name="play-skip-back" size={28} color="#d6d6e3" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.ctrlBig} onPress={togglePlay} activeOpacity={0.85}>
            {isPlaying
              ? <Ionicons name="pause" size={34} color="#fff" />
              : <Ionicons name="play" size={34} color="#fff" />
            }
          </TouchableOpacity>

          <TouchableOpacity style={styles.ctrlSmall} onPress={() => {}}>
            <Ionicons name="play-skip-forward" size={28} color="#d6d6e3" />
          </TouchableOpacity>
        </View>

        {}
        <View style={styles.controlsSecondary}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="shuffle" size={22} color="#a7a7b3" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="repeat" size={22} color="#a7a7b3" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={22} color="#a7a7b3" />
          </TouchableOpacity>
        </View>

        {}
        <TouchableOpacity style={[styles.neutralBtn, { marginTop: 14 }]} onPress={() => navigation.goBack()}>
          <Text style={styles.btnTxt}>VOLVER</Text>
        </TouchableOpacity>

        <Text style={styles.footerId}>ID pista: {songId}</Text>
      </View>
    </SafeAreaView>
  );
}

const ACCENT = '#4b5bdc';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16, backgroundColor: '#101015' },
  card: {
    width: '100%', maxWidth: 480, backgroundColor: '#1b1b22',
    borderRadius: 16, padding: 16,
    shadowOpacity: 0.2, shadowRadius: 6, shadowOffset: { width: 0, height: 3 }, elevation: 4,
  },
  cover: { width: '100%', height: 260, borderRadius: 12, borderWidth: 1, borderColor: '#2a2a35' },
  title: { color: '#fff', fontSize: 22, fontWeight: '800' },
  subtitle: { color: '#bdbdbd', marginTop: 4, fontSize: 16 },
  caption: { color: '#8e8e98', marginTop: 8 },

  progressTimes: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  timeTxt: { color: '#8e8e98', fontSize: 12 },
  progressBar: {
    height: 8, backgroundColor: '#22222b', borderRadius: 999,
    borderWidth: 1, borderColor: '#2a2a35', position: 'relative', overflow: 'hidden',
  },
  progressFill: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '35%', backgroundColor: ACCENT },
  progressThumb: {
    position: 'absolute', left: '35%', top: -6,
    width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff',
    borderWidth: 3, borderColor: ACCENT,
  },

  controls: {
    marginTop: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  ctrlSmall: {
    width: 52, height: 52, borderRadius: 26, backgroundColor: '#22222b',
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: '#2a2a35',
  },
  ctrlBig: {
    width: 72, height: 72, borderRadius: 36, backgroundColor: ACCENT,
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 10, shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  controlsSecondary: {
    marginTop: 10, flexDirection: 'row', gap: 18, justifyContent: 'center',
  },

  neutralBtn: {
    backgroundColor: '#4b5bdc',
    paddingVertical: 12, paddingHorizontal: 18, borderRadius: 10, alignItems: 'center',
  },
  btnTxt: { color: '#fff', fontSize: 16, fontWeight: '700' },

  footerId: { marginTop: 12, color: '#6f6f78', fontSize: 12, textAlign: 'right' },
});
