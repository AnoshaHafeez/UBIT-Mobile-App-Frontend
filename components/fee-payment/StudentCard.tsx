import { View, Text, StyleSheet, Image } from "react-native";

export default function StudentCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Bilal Ahmed</Text>
      <Text style={styles.id}>123456789</Text>

      <Text style={styles.department}>
        Department of Computer Science
      </Text>

      <Text style={styles.semester}>Current Semester: 5th</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  id: {
    color: "#777",
    marginBottom: 5,
  },
  department: {
    color: "#E5A000",
    fontWeight: "600",
  },
  semester: {
    marginTop: 5,
    color: "#444",
  },
});