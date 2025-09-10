import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function TrackerScreen() {

    const [notify, setNotify] = useState(false);
      
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Tracker</Text>
      </View>

      {/* File Info */}
      <View style={styles.card}>
        <Text style={styles.fileName}>Unriggedcat.blend</Text>
        <Text style={styles.info}>frame: 396 of 2056</Text>
        <Text style={styles.info}>time left est: 2 hr 30m</Text>

        <View style={styles.row}>
          <Text style={styles.info}>notify when finished:</Text>
           <Switch
            value={notify}
            onValueChange={setNotify}
            thumbColor={notify ? "#d17a22" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#d17a22" }}
          />
        </View>
      </View>

      {/* Progress Info */}
      <View style={styles.card}>
        <Text style={styles.info}>frames rendered: 396</Text>
        <Text style={styles.info}>frames remaining: 1660</Text>

        <Text style={styles.info}>est method: ▼ Avg * frames</Text>
        <Text style={styles.info}>avg frame time: 2m 35s</Text>
        <Text style={styles.info}>time left est: 2hr 30m</Text>
        <Text style={styles.info}>EST: 7:46 PM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a", // dark bg
    padding: 20,
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "#d17a22",
    padding: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },
  fileName: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});