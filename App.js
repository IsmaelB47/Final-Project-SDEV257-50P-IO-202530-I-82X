import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MovieList from "./src/components/MovieList";
import { styles } from "./src/styles/styles";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Popular Movies</Text>
        </View>
        <MovieList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
