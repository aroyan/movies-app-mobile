import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Trending } from './api/Trending'


export default function App() {

  const [trending, setTrending] = useState(null)

  useEffect(() => {
    Trending()
      .then(response => setTrending(response.data.results))
      .catch(error => console.error(error))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Movies</Text>
      {
        trending ? trending.map(item => <Text key={item.id}>{item.title}</Text>) : <Text>Loading</Text>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
  }
});
