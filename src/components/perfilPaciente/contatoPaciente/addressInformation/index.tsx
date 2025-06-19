import * as React from "react";
import {Image, Text, View} from "react-native";
import {styles} from "./styles";

interface AppointmentCardProps {
    date: string;
    time: string;
    type: string;
    dateIconUrl: string;
    timeIconUrl: string;
    typeIconUrl: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
                                                             date,
                                                             time,
                                                             type,
                                                             dateIconUrl,
                                                             timeIconUrl,
                                                             typeIconUrl,
                                                         }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftColumn}>
                <View style={styles.dateRow}>
                    <Image
                        source={{ uri: dateIconUrl }}
                        style={styles.icon}
                    />
                    <View style={styles.dateTextContainer}>
                        <Text style={styles.dateText}>{date}</Text>
                    </View>
                </View>
                <View style={styles.timeRow}>
                    <Image
                        source={{ uri: timeIconUrl }}
                        style={styles.icon}
                    />
                    <View style={styles.timeTextContainer}>
                        <Text style={styles.timeText}>{time}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightColumn}>
                <Image
                    source={{ uri: typeIconUrl }}
                    style={styles.icon}
                />
                <View style={styles.typeTextContainer}>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>
        </View>
    );
};

export default AppointmentCard;
