import { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {
  const [email] = useState('he22i04001@usonsonate.edu.sv');

  const myPlayList = [
    {
      id: '1',
      value: 'Canciones Para Hacer Ejercicio',
      canciones: [
        {
          idSong: '101',
          valSong: 'Eye of the Tiger',
          artista: 'Survivor',
          portada: 'https://i.scdn.co/image/ab67616d0000b27328c091d788ec5126817dc07a',
          duration: '4:05',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/EyeOfTheTiger.mp3',
        },
        {
          idSong: '102',
          valSong: 'Stronger',
          artista: 'Kanye West',
          portada: 'https://i.ytimg.com/vi/PsO6ZnUZI0g/maxresdefault.jpg',
          duration: '4:27',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/Stronger.mp3',
        },
        {
          idSong: '103',
          valSong: 'Believer',
          artista: 'Imagine Dragons',
          portada: 'https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a',
          duration: '3:23',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/Believer.mp3',
        },
        {
          idSong: '104',
          valSong: 'Can’t Hold Us',
          artista: 'Macklemore & Ryan Lewis',
          portada: 'https://i.ytimg.com/vi/2zNSgSzhBfM/sddefault.jpg',
          duration: '7:04',
          audioUrl: 'https://github.com/ArmandoH117/Archivos/raw/refs/heads/main/CantHoldUs.mp3',
        },
        {
          idSong: '105',
          valSong: 'Lose Yourself',
          artista: 'Eminem',
          portada: 'https://i.ytimg.com/vi/_Yhyp-_hX2s/maxresdefault.jpg',
          duration: '5:24',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/LoseYourself.mp3',
        },

      ],
    },
    {
      id: '2',
      value: 'Musica Pop',
      canciones: [
        {
          idSong: '201',
          valSong: 'Blinding Lights',
          artista: 'The Weeknd',
          portada: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
          duration: '3:20',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/Blinding.mp3',
        },
        {
          idSong: '202',
          valSong: 'Levitating',
          artista: 'Dua Lipa',
          portada: 'https://i.ytimg.com/vi/TUVcZfQe-Kw/sddefault.jpg',
          duration: '3:51',
          audioUrl: 'https://github.com/ArmandoH117/Archivos/raw/refs/heads/main/Levitating.mp3',
        },
        {
          idSong: '203',
          valSong: 'Shake It Off',
          artista: 'Taylor Swift',
          portada: 'https://i.ytimg.com/vi/nfWlot6h_JM/maxresdefault.jpg',
          duration: '4:02',
          audioUrl: 'https://github.com/ArmandoH117/Archivos/raw/refs/heads/main/Shake.mp3',
        },
        {
          idSong: '204',
          valSong: 'Bad Habits',
          artista: 'Ed Sheeran',
          portada: 'https://i.ytimg.com/vi/orJSJGHjBLI/maxresdefault.jpg',
          duration: '4:01',
          audioUrl: 'https://github.com/ArmandoH117/Archivos/raw/refs/heads/main/BadHabits.mp3',
        },
        {
          idSong: '205',
          valSong: 'Uptown Funk',
          artista: 'Mark Ronson ft. Bruno Mars',
          portada: 'https://i.ytimg.com/vi/OPf0YbXqDm0/maxresdefault.jpg',
          duration: '4:31',
          audioUrl: 'https://github.com/ArmandoH117/Archivos/raw/refs/heads/main/UptownFunk.mp3',
        },
      ],
    },
    {
      id: '3',
      value: 'Rock',
      canciones: [
        {
          idSong: '301',
          valSong: 'Enter Sandman',
          artista: 'Metallica',
          portada: 'https://i.ytimg.com/vi/CD-E-LDc384/maxresdefault.jpg',
          duration: '5:31',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/EnterSandman.mp3',
        },
        {
          idSong: '302',
          valSong: 'Smells Like Teen Spirit',
          artista: 'Nirvana',
          portada: 'https://i.ytimg.com/vi/hTWKbfoikeg/maxresdefault.jpg',
          duration: '4:39',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/SmellsLikeTeenSpirit.mp3',
        },
        {
          idSong: '303',
          valSong: 'Sweet Child O’ Mine',
          artista: 'Guns N’ Roses',
          portada: 'https://i.ytimg.com/vi/1w7OgIMMRc4/maxresdefault.jpg',
          duration: '5:03',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/SweetChildOMine.mp3',
        },
        {
          idSong: '304',
          valSong: 'Back In Black',
          artista: 'AC/DC',
          portada: 'https://www.revistafactum.com/wp-content/uploads/2015/07/ACDC.jpg',
          duration: '4:14',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/BackInBlack.mp3',
        },
        {
          idSong: '305',
          valSong: 'Bohemian Rhapsody',
          artista: 'Queen',
          portada: 'https://m.media-amazon.com/images/M/MV5BZWU2OWU0MTktZjFkNC00NGI5LWFiYTYtMmYxN2NlNGFmYzE4XkEyXkFqcGc@._V1_.jpg',
          duration: '5:59',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/BohemianRhapsody.mp3',
        },

      ],
    },
    {
      id: '4',
      value: 'Electrónica',
      canciones: [
        {
          idSong: '401',
          valSong: 'Levels',
          artista: 'Avicii',
          portada: 'https://i.ytimg.com/vi/_ovdm2yX4MA/maxresdefault.jpg',
          duration: '3:19',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/Levels.mp3',
        },
        {
          idSong: '402',
          valSong: 'Animals',
          artista: 'Martin Garrix',
          portada: 'https://i.ytimg.com/vi/gCYcHz2k5x0/hqdefault.jpg',
          duration: '3:12',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/Animals.mp3',
        },
        {
          idSong: '403',
          valSong: 'Titanium',
          artista: 'David Guetta ft. Sia',
          portada: 'https://i.vimeocdn.com/video/431559530-14db14e6e5c5cd49102894352d20030ed99f5201d825ad3d8bacff2d6c6d542c-d',
          duration: '4:06',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/Titanium.mp3',
        },
        {
          idSong: '404',
          valSong: 'One More Time',
          artista: 'Daft Punk',
          portada: 'https://i.ytimg.com/vi/FGBhQbmPwH8/sddefault.jpg',
          duration: '5:22',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/OneMoreTime.mp3',
        },
        {
          idSong: '405',
          valSong: 'Scared to Be Lonely',
          artista: 'Martin Garrix & Dua Lipa',
          portada: 'https://i.ytimg.com/vi/e2vBLd5Egnk/maxresdefault.jpg',
          duration: '3:51',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/ScaredToBeLonely.mp3',
        },
      ],
    },
    {
      id: '5',
      value: 'Reggae',
      canciones: [
        {
          idSong: '501',
          valSong: 'Armonia De Amor',
          artista: 'Gondwana',
          portada: 'https://cdn-images.dzcdn.net/images/cover/cac133fb58f25912842f9bfc18f271be/1900x1900-000000-80-0-0.jpg',
          duration: '4:10',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/ArmoniaDeAmor.mp3',
        },
        {
          idSong: '502',
          valSong: 'Ninguna Como Ella',
          artista: 'Zona Ganjah',
          portada: 'https://cdn-images.dzcdn.net/images/cover/669613bd79256961db51dc6cd43ad0a8/1900x1900-000000-80-0-0.jpg',
          duration: '4:48',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/NingunaComoElla.mp3',
        },
        {
          idSong: '503',
          valSong: 'Una Luz',
          artista: 'Resistencia Suburbana',
          portada: 'https://i.ytimg.com/vi/ZUFRIM3BgCQ/sddefault.jpg',
          duration: '5:41',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/UnaLuz.mp3',
        },
        {
          idSong: '504',
          valSong: 'One Love',
          artista: 'Bob Marley',
          portada: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjE4sgrrNedZ0ueW631CPrW07qvdoXkTupYA&s',
          duration: '2:46',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/OneLove.mp3',
        },
        {
          idSong: '505',
          valSong: 'Welcome To Jamrock',
          artista: 'Damian Marley',
          portada: 'https://i.ytimg.com/vi/_GZlJGERbvE/maxresdefault.jpg',
          duration: '3:41',
          audioUrl: 'https://raw.githubusercontent.com/ArmandoH117/Archivos/main/WelcomeToJamrock.mp3',
        },

      ],
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.primaryBtn}
      onPress={() =>
        navigation.navigate('DetallePlaylist', {
          listId: item.id,
          titleList: item.value,
          songs: item.canciones,
        })
      }
    >
      <Text style={styles.primaryTxt}>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.viewImg}>
            <Image
              source={{ uri: 'https://drive.google.com/uc?export=view&id=1RXrrlSNNEiBquDXWQ3BxeDweifBNmMgb' }}
              style={{ width: 100, height: 100, borderRadius: 8 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Armando Hernandez</Text>
            <Text style={styles.subtitle}>@{email}</Text>
            <Text style={styles.caption}>Playlists recientes</Text>
          </View>
        </View>

        <FlatList
          data={myPlayList}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          style={{ marginTop: 10 }}
          contentContainerStyle={{ paddingBottom: 8 }}
        />
      </View>

      <View style={{ marginTop: 12, width: Math.min(width - 24, 480) }}>
        <TouchableOpacity style={styles.neutralBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnTxt}>VOLVER AL INICIO</Text>
        </TouchableOpacity>
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
  viewImg: { width: 100, height: 100, borderRadius: 8, overflow: 'hidden', borderWidth: 1, borderColor: '#2a2a35' },
  title: { color: '#fff', fontSize: 20, fontWeight: '700' },
  subtitle: { color: '#bdbdbd', marginTop: 2 },
  caption: { color: '#8e8e98', marginTop: 6 },

  primaryBtn: {
    backgroundColor: '#40397cbe',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  primaryTxt: { fontSize: 16, color: 'white', textAlign: 'left', fontWeight: '700' },

  neutralBtn: {
    backgroundColor: '#4b5bdc',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnTxt: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
