import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import { Avatar, Card, Divider } from 'react-native-elements';

export default function HomeScreen() {
    const tips = [
        {
            tipId: 1,
            competition: 'English Premier League',
            tipImageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/11/d5/26/a9/stand.jpg',
            hostTeam: 'Leeds United',
            hostTeamLogo_url: 'https://www.sofascore.com/images/team-logo/football_34.png',
            visitorTeam: 'Arsenal',
            visitorTeamLogo_url: 'https://www.sofascore.com/images/team-logo/football_42.png',
            date: '22-11-2020',
            gameStart: '18:30',
            tip: 'Over 2.5 Goals'
        },
        {
            tipId: 2,
            competition: 'English Premier League',
            tipImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ8cDVajzu5StWJ0i7193JT60wYhv7wZr9Og&usqp=CAU',
            hostTeam: 'Liverpool',
            hostTeamLogo_url: 'https://www.sofascore.com/images/team-logo/football_44.png',
            visitorTeam: 'Leicester City',
            visitorTeamLogo_url: 'https://www.sofascore.com/images/team-logo/football_31.png',
            date: '22-11-2020',
            gameStart: '21:15',
            tip: 'HomeWin'
        }
    ];

    return (
        <View style={styles.container}>
            {
                tips.map((tip, i) => (
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => alert('Pressed!')}>
                        <Card containerStyle={styles.cardStyles}>
                            
                            <View style={styles.cardHeader}>
                                <Image source={{ uri: tip.tipImageUrl }} style={styles.headerImage} />
                                <Text style={styles.cardHeaderText}>{tip.competition}</Text>
                            </View>
                            
                            <View style={styles.cardSubHeader}>
                                <Text style={styles.cardSubHeaderText}>{tip.date}</Text>
                                <Text style={styles.cardSubHeaderText}>{tip.gameStart}</Text>
                            </View>
                            <View>
                                <View style={styles.tipContent}>
                                    <View style={styles.tipRow}>
                                        <Avatar source={{ uri: tip.hostTeamLogo_url }} />
                                        <Text>{tip.hostTeam}</Text>
                                    </View>
                                    <Divider style={{ backgroundColor: '#6300a0' }} />
                                    <View style={styles.tipRow}>
                                        <Avatar source={{ uri: tip.visitorTeamLogo_url }} />
                                        <Text>{tip.visitorTeam}</Text>
                                    </View>
                                </View>
                                <View style={styles.cardContentTip}>
                                    <Text style={styles.cardContentTipText}>{tip.tip}</Text>
                                </View>
                            </View>
                        </Card>
                    </TouchableHighlight>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    cardStyles: {
        padding: 0,
        borderRadius: 10
    },
    headerImage: {
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        opacity: 0.65
    },
    cardHeader: {
        backgroundColor: '#000000',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardHeaderText: {
        color: '#ffffff',
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        width: '100%',
        left: 0,
        right: 0,
        bottom: 0,
    },
    cardSubHeader: {
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    cardSubHeaderText: {
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    },
    cardContentTip: {
        padding: 10,
        backgroundColor: '#6300a0',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    cardContentTipText: {
        textAlign: 'right',
        color: '#ffffff',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    },
    tipContent: {
        padding: 10,
    },
    tipRow: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 5,
        paddingTop: 5
    }
});