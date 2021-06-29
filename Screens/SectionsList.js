import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    SectionList,
    Image,
    TouchableOpacity,
} from 'react-native';

const DATA = [
    {
        key: 0,
        title: "Team A",
        data: ["Ahmad Arman", "Aroona Ali", "Alia Ali"]
    },
    {
        key: 1,
        title: "Team B",
        data: ["Saboor Done", "Zulfi Done", "Kashif Saboor"]
    },
    {
        key: 2,
        title: "Team C",
        data: ["Saniya Ali", "Ayesha Ali", "Amna Ali"]
    },

];

const COLORS = [
    '#ffff00',
    '#E87A79',
    '#47B6AC',
    '#bf00ff',
    '#1CA7C4',
    '#FF1493',
    '#C0C0C0',
];

const onPress = (value) => {
    alert(value);
};

const App = () => {
    return (
        <View style={styles.container_style}>
            <Text style={styles.header}>Group List Demo View</Text>
            <SectionList

                sections={DATA}
                renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={1} onPress={() => onPress(item)}>
                    <View style={styles.item_style}>
                        <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",flex:1}}>
                            <Text style={[styles.item_image, {backgroundColor:  COLORS[Math.floor(Math.random() * COLORS.length)]}]}>{item.match(/(\s|^)([a-z])/gi).join('')}</Text>
                            <Text style={styles.item_heading}>{item}</Text>
                        </View>
                        <Image style={styles.item_icon} source={require('../assets/images/forward-icon.png')} />
                    </View>
                </TouchableOpacity>
                }

                renderSectionHeader={({ section }) => <Text style={styles.section_style}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container_style: {
        flex: 1,
    },
    item_style: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 10,
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    item_image: {
        fontSize: 13,
        backgroundColor: "#F5DEB3",
        padding: 15,
        borderRadius: 100,
        color: "#fff",
        fontWeight: "bold",
    },
    item_heading: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight: "bold",
    },
    item_icon: {
        width: 30,
    },
    header: {
        color: "#fff",
        backgroundColor: '#ff0000',
        padding: 20,
        fontSize: 25,
    },
    section_style: {
        padding: 10,
        fontSize: 17,
        fontWeight: "bold",
        letterSpacing: 1,
    }
});

export default App;
