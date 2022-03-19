import React, { useRef, useEffect } from 'react'
import { View, Animated, Dimensions } from 'react-native'
import { Layout, Text, withStyles } from '@ui-kitten/components';
import LogoFirstPart from '../assets/images/svg/logo-first-part.svg'
import LogoSecondPart from '../assets/images/svg/logo-second-part.svg'
import LogoThirdPart from '../assets/images/svg/logo-third-part.svg'



function SplashScreen(props) {
    const allLogoTop = useRef(new Animated.Value(Dimensions.get('screen').height/2)).current 
    const notifWidth = useRef(new Animated.Value(-10)).current
    const rotate = useRef(new Animated.Value(0)).current 
    const notifIconTransform = useRef(new Animated.Value(0)).current 
    const { eva, style, ...restProps } = props;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(
                allLogoTop,
              {
                toValue: Dimensions.get('screen').height/100,
                duration: 2000,
                useNativeDriver: false
              }
            ).start(),
            Animated.delay(3000),
            Animated.timing(
                notifWidth,
                {
                toValue: 1,
                duration: 3000,
                useNativeDriver: false
                }
            ).start(),
            // Animated.delay(3000),
            Animated.sequence([
                Animated.delay(3000),
                Animated.timing(rotate,{toValue: 1,duration: 500,useNativeDriver: false}),
                Animated.timing(rotate,{toValue: 2,duration: 500,useNativeDriver: false}),
                Animated.timing(rotate,{toValue: 3,duration: 500,useNativeDriver: false}),
            ]).start(),
            
            Animated.sequence([
                Animated.delay(5000),
                Animated.timing(notifIconTransform, { toValue: 10, duration: 100, useNativeDriver: false }),
                Animated.timing(notifIconTransform, { toValue: -10, duration: 100, useNativeDriver: false }),
                Animated.timing(notifIconTransform, { toValue: 10, duration: 100, useNativeDriver: false }),
                Animated.timing(notifIconTransform, { toValue: 0, duration: 100, useNativeDriver: false})
              ]).start(),
            
        ])

        
      }, [allLogoTop, notifWidth,notifIconTransform])
    const spin = rotate.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: ['0deg', '20deg','-20deg','0deg']
      })
    return (
        <View style={eva.style.container}>
            <Animated.View style={[
                eva.style.logo,
                {bottom: allLogoTop}
                ]}>
                <LogoFirstPart 
                    width="100"
                    height="100"
                />
                <Animated.View style={[
                    eva.style.notifView,
                    {
                        opacity: notifWidth,
                    }
                    ]}>
                    <View>
                        <LogoSecondPart
                            width="40"
                            height="40"
                        />
                        <Animated.View style={[eva.style.notifIconView, { transform: [ {rotate: spin}] }]}>
                            <LogoThirdPart
                                width="20"
                                height="20"
                            />
                        </Animated.View>
                    </View>
                </Animated.View>
            </Animated.View>
            
            <Animated.View style={{ transform: [{translateX: notifIconTransform}] }}>
            <Text category='h3'>Get Odoo notify</Text>
            </Animated.View>
        </View>
    )
}

const SplashScreenView = withStyles(SplashScreen, (theme) => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        },
    logo:{
        bottom: Dimensions.get('screen').height/100
    },
    notifView: {
        position: 'absolute',
        bottom: Dimensions.get('screen').height/12,
        right: 0
    },
    notifIconView: {
        position: 'absolute',
        top: "25%",
        right: "28%"
    },

  }));

  export default SplashScreenView;