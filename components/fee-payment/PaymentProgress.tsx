import { View, Text, StyleSheet } from "react-native";

type Props = {
  totalFee: number;
  paidFee: number;
};

export default function PaymentProgress({ totalFee, paidFee }: Props) {
  const percentage = (paidFee / totalFee) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Progress</Text>

      <View style={styles.barBackground}>
        <View
          style={[
            styles.barFill,
            { width: `${percentage}%` },
          ]}
        />
      </View>

      <Text style={styles.percent}>{percentage.toFixed(0)}% Paid</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 16,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  barBackground: {
    height: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
  },
  barFill: {
    height: 10,
    backgroundColor: "#B40000",
  },
  percent: {
    marginTop: 8,
    color: "#555",
  },
});