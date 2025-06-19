import * as React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

interface ProfileHeaderProps {
    patientName: string;
    onEditPress: () => void;

}

const ProfileHeader=({patientName, onEditPress}:ProfileHeaderProps)=>{
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onEditPress} style={styles.actionButton}>
                <Image
                    source={require("../../../../assets/images/points.png")}
                    style={styles.actionIcon}
                />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{patientName}</Text>
            </View>
        </View>
    );
};

export default ProfileHeader;
