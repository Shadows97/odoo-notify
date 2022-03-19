import React from 'react'
import { View, Dimensions } from 'react-native';
import { Layout, Text, withStyles, Button } from '@ui-kitten/components';
import LogoFirstPart from '../assets/images/svg/logo-first-part.svg'

 function Starter(props) {
    const { eva, style, ...restProps } = props;
    return (
        <View style={eva.style.container}>
            <View style={eva.style.topBlock}>
                <View>
                    <LogoFirstPart 
                            width="150"
                            height="150"
                        />
                </View>
                <View>
                    <Text style={eva.style.title}>HOW TO GET YOUR NOTIFICATION</Text>
                </View>
            </View>
            <View>
                <View style={eva.style.listItem}>
                    <View style={eva.style.itemDot}></View>
                    <View><Text>Fourni l'Url de ta plateforme</Text></View>
                </View>
                <View style={eva.style.listItem}>
                    <View style={eva.style.itemDot}></View>
                    <View><Text>Fourni un identifiant</Text></View>
                </View>
                <View style={eva.style.listItem}>
                    <View style={eva.style.itemDot}></View>
                    <View><Text>Visualise tes notifications</Text></View>
                </View>
            </View>
            <View>
                <Button size='large' style={eva.style.nextButton}>
                <Text style={eva.style.nextButton}>Suivant</Text>
                </Button>
            </View>
        </View>
    )
}

const StarterScreenView = withStyles(Starter, (theme) => ({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20%'
        },
    topBlock: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "20%"
        },
    title: {
        fontWeight: 'bold'
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: "10%"
    },
    itemDot:{
        width : 10,
        height: 10,
        borderRadius: 30,
        backgroundColor: theme['color-primary-500'],
        marginRight: 20
    },
    nextButton: {
        width : Dimensions.get('screen').width * (70/100),
        textAlign: 'center'
    },
    nextText:{
        textAlign: 'center'
    }

    

  }));

  export default StarterScreenView;
