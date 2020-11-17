import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image, SafeAreaView, FlatList } from 'react-native';
import { Avatar, Card, Divider, ListItem } from 'react-native-elements';

interface Tip {
    tipId: number,
    competition: string,
    tipImageUrl: string,
    hostTeam: string,
    hostTeamLogo_url: string,
    hostTeamStandingPosition: string,
    visitorTeam: string,
    visitorTeamLogo_url: string,
    visitorTeamStandingPosition: string,
    date: string,
    gameStart: string,
    tip: string,
    tipCoefficient: string
}

export default function HomeScreen() {
    const tips = [
        {
            tipId: 1,
            competition: 'English Premier League',
            tipImageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/11/d5/26/a9/stand.jpg',
            hostTeam: 'Leeds United',
            hostTeamLogo_url: 'https://www.sofascore.com/images/team-logo/football_34.png',
            hostTeamStandingPosition: '15',
            visitorTeam: 'Arsenal',
            visitorTeamLogo_url: 'https://www.sofascore.com/images/team-logo/football_42.png',
            visitorTeamStandingPosition: '11',
            date: '22-11-2020',
            gameStart: '18:30',
            tip: 'Over 2.5 Goals',
            tipCoefficient: '1.90'
        },
        {
            tipId: 2,
            competition: 'English Premier League',
            tipImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ8cDVajzu5StWJ0i7193JT60wYhv7wZr9Og&usqp=CAU',
            hostTeam: 'Liverpool',
            hostTeamLogo_url: 'https://www.sofascore.com/images/team-logo/football_44.png',
            hostTeamStandingPosition: '3',
            visitorTeam: 'Leicester City',
            visitorTeamLogo_url: 'https://www.sofascore.com/images/team-logo/football_31.png',
            visitorTeamStandingPosition: '1',
            date: '22-11-2020',
            gameStart: '21:15',
            tip: 'Home Win',
            tipCoefficient: '1.75'
        },
        {
            tipId: 3,
            competition: 'English Premier League',
            tipImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/James_Hargreaves_Stand_Burnley.jpg',
            hostTeam: 'Burnley',
            hostTeamLogo_url: 'https://www.sofascore.com/images/team-logo/football_6.png',
            hostTeamStandingPosition: '19',
            visitorTeam: 'Crystal Palace',
            visitorTeamLogo_url: 'https://www.sofascore.com/images/team-logo/football_7.png',
            visitorTeamStandingPosition: '8',
            date: '23-11-2020',
            gameStart: '19:30',
            tip: 'Home Win',
            tipCoefficient: '2.75'
        }
    ];

    const renderTip = (tip: Tip) => (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Pressed!')}>
            <Card containerStyle={styles.cardStyles}>
                
                <View style={styles.tipHeader}>
                    <Image source={{ uri: tip.tipImageUrl }} style={styles.headerImage} />
                    <Text style={styles.tipHeaderText}>{tip.competition}</Text>
                </View>
                
                <View style={styles.tipSubHeader}>
                    <Text style={styles.tipSubHeaderText}>{tip.date}</Text>
                    <Text style={styles.tipSubHeaderText}>{tip.gameStart}</Text>
                </View>
                <View>
                    <View style={styles.tipContent}>
                        <View style={styles.tipRow}>
                            { tip.hostTeamStandingPosition ? <Text style={styles.tipTeamStandingPosition}>{tip.hostTeamStandingPosition}</Text> : null } 
                            <Avatar source={{ uri: tip.hostTeamLogo_url }} size="small" />
                            <Text style={styles.tipTeamStyle}>{tip.hostTeam}</Text>
                        </View>
                        <Divider style={{ backgroundColor: '#6300a0' }} />
                        <View style={styles.tipRow}>
                            { tip.visitorTeamStandingPosition ? <Text style={styles.tipTeamStandingPosition}>{tip.visitorTeamStandingPosition}</Text> : null }
                            <Avatar source={{ uri: tip.visitorTeamLogo_url }} size="small" />
                            <Text style={styles.tipTeamStyle}>{tip.visitorTeam}</Text>
                        </View>
                    </View>
                    <View style={styles.tipContentTip}>
                        <Text style={styles.tipContentTipText}>{tip.tip} @ {tip.tipCoefficient}</Text>
                    </View>
                </View>
            </Card>
        </TouchableHighlight>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={tips}
                renderItem={({item}) => renderTip(item)}
                keyExtractor={item => item.tipId}
            />
        </SafeAreaView>
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
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        opacity: 0.65
    },
    tipHeader: {
        backgroundColor: '#000000',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    tipHeaderText: {
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
    tipSubHeader: {
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    tipSubHeaderText: {
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    },
    tipContentTip: {
        padding: 10,
        backgroundColor: '#6300a0',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    tipContentTipText: {
        textAlign: 'right',
        color: '#ffffff',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    },
    tipTeamStandingPosition: {
        padding: 5,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        width: 30,
        height: 30,
        display: 'flex',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: 5,
    },
    tipTeamStyle: {
        marginLeft: 10
    },
    tipContent: {
        padding: 10,
    },
    tipRow: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 5,
        paddingTop: 5,
    }
});