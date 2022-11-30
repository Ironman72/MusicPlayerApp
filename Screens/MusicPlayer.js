import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider';


const { height, width } = Dimensions.get('window');

const MusicPlayer = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContainer}>
                {/* image */}
                <View style={styles.imageWrapper}>
                    <Image source={require('../assets/images/img1.jpeg')} style={styles.musicImage} />
                </View>
                {/* Name of Song  & details */}
                <View>
                    <Text style={styles.songTitle}>Song Name</Text>
                    <Text style={styles.songArtist}> Some Artist Name</Text>
                </View>

                {/* Slider */}
                <View>
                    <Slider
                        style={styles.progressBar}
                        value={10}
                        minimumValue={0}
                        maximumValue={100}
                        thumbTintColor='#ffe03c'
                        minimumTrackTintColor='#ffe03c'
                        maximumTrackTintColor='#fffdf7'
                        onSlidingComplete={() => { }}
                    />
                    {/* duration */}
                    <View style={styles.progressDuration}>
                        <Text style={styles.progressLevelText}>00:00</Text>
                        <Text style={styles.progressLevelText}>00:00</Text>
                    </View>
                </View>

                {/* Music Controls */}
                <View style={styles.musicControllerWrapper}>
                <TouchableOpacity onPress={() => { }}>
                        <Ionicons name='play-skip-back-outline' size={35} color='#ffe03c' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name='ios-play-circle' size={75} color='#ffe03c' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name='play-skip-forward-outline' size={35} color='#ffe03c' />
                    </TouchableOpacity>
                </View>


            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.IconWrapper}>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name='heart-outline' size={30} color='#ffe03c' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='repeat-outline' size={30} color='#ffe03c' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='share-outline' size={30} color='#ffe03c' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='ellipsis-horizontal' size={30} color='#ffe03c' />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default MusicPlayer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomContainer: {
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
        borderTopColor: '#515151',
        borderWidth: 1
    },
    IconWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },

    imageWrapper: {
        width: 300,
        height: 340,
        marginBottom: 25

    },
    musicImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    songTitle: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,

    },
    songArtist: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 16,
    },
    progressBar: {
        width: 350,
        height: 40,
        marginTop: 25,
        flexDirection: 'row',

    },
    progressDuration: {
        width: 340,
        flexDirection: 'row',
        justifyContent:'space-between'

    },
    progressLevelText: {
        color: 'white',
        fontWeight: '500'
    },
    musicControllerWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width : '60%',
        marginTop: 15
    }

})