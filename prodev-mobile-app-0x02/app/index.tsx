import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={{ uri: "https://picsum.photos/800/1600" }} // temporary placeholder
        style={styles.background}
      >
        <SafeAreaView style={styles.container}>
          <Text>Entry Screen - Awesome</Text>

          <View>
            <Text style={styles.largeText}>
              Typescript is great if you practice more
            </Text>
            <Text style={styles.mediumText}>
              React Native provides you a single codebase for cross platforms
            </Text>
            <Text style={styles.smallText}>ALX is awesome</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(144, 202, 249, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});

