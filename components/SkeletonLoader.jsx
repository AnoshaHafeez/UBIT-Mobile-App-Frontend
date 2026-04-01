import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Shimmer = ({ width: w, height: h, style }) => {
    // 1. Ensure we have a numeric value for the animation logic. 
    // If 'w' is a string (e.g., "100%"), we fall back to screen width.
    const numericWidth = typeof w === 'number' ? w : SCREEN_WIDTH;

    const translateX = useRef(new Animated.Value(-numericWidth)).current;

    useEffect(() => {
    translateX.setValue(-numericWidth);

    const animation = Animated.loop(
        Animated.timing(translateX, {
            toValue: numericWidth,
            duration: 1200,
            useNativeDriver: true,
        })
    );

    animation.start();

    return () => animation.stop(); // cleanup
}, [numericWidth]);

    return (
        <View
            style={[
                {
                    width: w,
                    height: h,
                    backgroundColor: '#E1E9EE',
                    overflow: 'hidden'
                },
                style
            ]}
        >
            <Animated.View
                style={[
                    StyleSheet.absoluteFill,
                    {
                        transform: [{ translateX }],
                    },
                ]}
            >
                <LinearGradient
                    colors={['#E1E9EE', '#F2F8FC', '#E1E9EE']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ flex: 1 }}
                />
            </Animated.View>
        </View>
    );
};

export default Shimmer;