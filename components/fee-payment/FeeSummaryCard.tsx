import { View, Text, StyleSheet } from "react-native";

export default function FeeSummaryCard({ total }: { total: number }) {

return (

<View style={styles.card}>

<Text style={styles.label}>Total Payable Fee</Text>

<Text style={styles.total}>
PKR {total}
</Text>

</View>

);
}

const styles = StyleSheet.create({

card: {
backgroundColor: "#fff",
margin: 20,
padding: 20,
borderRadius: 16,
alignItems: "center",

shadowColor: "#000",
shadowOpacity: 0.1,
shadowRadius: 12,
elevation: 5,
},

label: {
color: "#777",
marginBottom: 6,
},

total: {
fontSize: 24,
fontWeight: "bold",
color: "#B40000",
},

});