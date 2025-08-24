import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PlaylistDetailScreen from './src/screens/PlaylistDetailScreen';
import SongDetailScreen from './src/screens/SongDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="DetallePlaylist" component={PlaylistDetailScreen} />
        <Stack.Screen name="DetalleCancion" component={SongDetailScreen} options={{ title: 'Canción' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}