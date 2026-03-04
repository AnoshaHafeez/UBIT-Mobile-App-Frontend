import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {

    return (
        <SafeAreaView>
            <View
                style={{
                    position: 'absolute',
                    height: 300,
                    width: '100%',
                    backgroundColor: '#800000',
                }}
            >
            </View>
            <Header leftIcon={"arrow-back"} rightIcon={"settings"} />
            <ProfileCard name={"Bilal Ahmed"} />
        </SafeAreaView>
    );
}

export default HomeScreen;
