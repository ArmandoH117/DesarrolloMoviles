// src/screens/SongDetailScreen.js
import React, { useEffect, useRef, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function SongDetailScreen({ route, navigation }) {
  const { songId, title, artist, cover, duration, audioUrl } = route.params ?? {};

  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Config audio
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
    });

    // Cargar sonido SOLO desde URL
    (async () => {
      try {
        const sound = new Audio.Sound();
        soundRef.current = sound;

        await sound.loadAsync({ uri: audioUrl }, { shouldPlay: false, volume: 1.0 });
        setIsLoaded(true);

        sound.setOnPlaybackStatusUpdate((status) => {
          if (!status.isLoaded) return;
          setIsPlaying(status.isPlaying);
        });
      } catch (e) {
        console.warn('Error cargando audio:', e);
      }
    })();

    // Limpieza
    return () => {
      (async () => {
        try {
          const s = soundRef.current;
          if (s) {
            await s.stopAsync();
            await s.unloadAsync();
          }
        } catch {}
      })();
    };
  }, [audioUrl]);

  const handlePlayPause = async () => {
    const s = soundRef.current;
    if (!s || !isLoaded) return;
    const status = await s.getStatusAsync();
    if (status.isPlaying) {
      await s.pauseAsync();
    } else {
      await s.playAsync();
    }
  };

  const handleStop = async () => {
    const s = soundRef.current;
    if (!s || !isLoaded) return;
    await s.stopAsync();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: cover }} style={styles.cover} />

        <View style={{ marginTop: 14 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{artist}</Text>
          <Text style={styles.caption}>Duración • {duration}</Text>
          <Text style={styles.badge}>Fuente: streaming</Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            style={[styles.btn, styles.primaryBtn, !isLoaded && { opacity: 0.5 }]}
            disabled={!isLoaded}
            onPress={handlePlayPause}
          >
            <Text style={styles.btnTxt}>{isPlaying ? 'Pausar' : 'Reproducir'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, styles.secondaryBtn, { marginTop: 10 }]}
            onPress={handleStop}
          >
            <Text style={styles.btnTxt}>Detener</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, styles.backBtn, { marginTop: 10 }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btnTxt}>VOLVER</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerId}>ID pista: {songId}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16, backgroundColor: '#101015' },
  card: {
    width: '100%', maxWidth: 480, backgroundColor: '#1b1b22',
    borderRadius: 12, padding: 16, shadowOpacity: 0.2, shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 }, elevation: 4,
  },
  cover: { width: '100%', height: 260, borderRadius: 12, borderWidth: 1, borderColor: '#2a2a35' },
  title: { color: '#fff', fontSize: 22, fontWeight: '700' },
  subtitle: { color: '#bdbdbd', marginTop: 4, fontSize: 16 },
  caption: { color: '#8e8e98', marginTop: 8 },
  badge: {
    marginTop: 8, alignSelf: 'flex-start', color: '#d6d6e3',
    backgroundColor: '#22222b', paddingHorizontal: 8, paddingVertical: 4,
    borderRadius: 8, borderWidth: 1, borderColor: '#2a2a35', fontSize: 12,
  },
  btn: { paddingVertical: 12, paddingHorizontal: 16, borderRadius: 10, alignItems: 'center' },
  primaryBtn: { backgroundColor: '#4b5bdc' },
  secondaryBtn: { backgroundColor: '#22222b', borderWidth: 1, borderColor: '#2a2a35' },
  backBtn: { backgroundColor: '#44445a' },
  btnTxt: { color: '#fff', fontSize: 16, fontWeight: '700' },
  footerId: { marginTop: 16, color: '#6f6f78', fontSize: 12, textAlign: 'right' },
});
