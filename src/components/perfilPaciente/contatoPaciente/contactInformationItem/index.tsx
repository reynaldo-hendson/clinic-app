import * as React from "react";
import {View, Image, Text, ImageSourcePropType} from "react-native";
import { styles } from "./styles";

interface ContactInformationItemProps {
    iconUrl: ImageSourcePropType;
    text: string;
    isMultiline?: boolean;
}

const ContactInformationItem: React.FC<ContactInformationItemProps> = ({
                                                                           iconUrl,
                                                                           text,
                                                                           isMultiline = false,
                                                                       }) => {
    return (
        <View style={styles.container}>
            <Image source={iconUrl} style={styles.icon} resizeMode="contain" />
            <View
                style={
                    isMultiline ? styles.multilineTextContainer : styles.textContainer
                }
            >
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};

export default ContactInformationItem;
