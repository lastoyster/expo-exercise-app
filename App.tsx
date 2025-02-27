import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./Navigation";

export default function App() {
  const isLoaded = useCachedResources();
  const theme = useColorScheme();

  console.log(theme);

  if (isLoaded) {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={theme} />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    );
  } else {
    return null;
  }
}