import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import StudentCard from "../../components/fee-payment/StudentCard";
import FeeSummary from "../../components/fee-payment/FeeSummary";
import PaymentProgress from "../../components/fee-payment/PaymentProgress";
import PayNowButton from "../../components/fee-payment/PayNowButton";
import { useRouter } from "expo-router";
import Header from "../../components/Header";
import ProfileCard from '@/components/profile/profile-card';

export default function FeeOverviewScreen() {

const router = useRouter();

return (
<SafeAreaView style={styles.container}>


<ScrollView showsVerticalScrollIndicator={false}>
    <View
                    style={{
                        position: 'absolute',
                        height: 300,
                        width: '100%',
                        backgroundColor: '#800000',
                    }}
                >
                </View>

            <Header leftIcon={"home"} rightIcon={"settings"} />
            <ProfileCard name={"Bilal Ahmed"} />

<FeeSummary
totalFee={60000}
paidFee={40000}
remainingFee={20000}
/>

<PaymentProgress
totalFee={60000}
paidFee={40000}
/>

{/* Navigation Button */}
<PayNowButton
onPress={() => router.push("/fee-details")}
/>

</ScrollView>

</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#F3F3F3",
},
});