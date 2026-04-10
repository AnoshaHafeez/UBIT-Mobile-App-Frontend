import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
title: string;
amount: number;
};

export default function FeeItemCard({ title, amount }: Props) {

const [open, setOpen] = useState(false);

return (

<TouchableOpacity
style={styles.card}
onPress={() => setOpen(!open)}
>

<View style={styles.row}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.amount}>PKR {amount}</Text>
</View>

{open && (
<Text style={styles.details}>
This fee covers university services related to {title}.
Tap again to collapse.
</Text>
)}

</TouchableOpacity>

);
}

const styles = StyleSheet.create({
card: {
backgroundColor: "#fff",
marginHorizontal: 20,
marginBottom: 12,
padding: 16,
borderRadius: 14,

shadowColor: "#000",
shadowOpacity: 0.08,
shadowRadius: 10,
elevation: 4,
},

row: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
},

title: {
fontSize: 15,
fontWeight: "600",
},

amount: {
fontWeight: "bold",
color: "#B40000",
},

details: {
marginTop: 10,
color: "#666",
fontSize: 13,
},
});