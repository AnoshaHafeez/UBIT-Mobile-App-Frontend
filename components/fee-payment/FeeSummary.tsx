import { View, Text, StyleSheet } from "react-native";

type Props = {
  totalFee: number;
  paidFee: number;
  remainingFee: number;
};

export default function FeeSummary({
  totalFee,
  paidFee,
  remainingFee,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Total Fee</Text>
        <Text style={styles.amount}>PKR {totalFee}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Paid</Text>
        <Text style={styles.amount}>PKR {paidFee}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Remaining</Text>
        <Text style={styles.amount}>PKR {remainingFee}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    width: "30%",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  label: {
    color: "#777",
    marginBottom: 5,
  },
  amount: {
    fontWeight: "bold",
    fontSize: 14,
  },
});