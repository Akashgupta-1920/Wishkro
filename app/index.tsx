import { WebView } from 'react-native-webview';
import { View, StyleSheet, StatusBar } from 'react-native';

export default function Home() {
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <WebView source={{ uri: 'https://wishkro.com' }} style={styles.webview} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
