import * as React from "react";
import {View} from "react-native";
import {styles} from "./styles";
import ContactInformationItem from "../contactInformationItem";

const phoneIconUrl= require("../../../../../assets/images/phone-call.png");
const emailIconUrl= require("../../../../../assets/images/mail.png");
const addressIconUrl= require("../../../../../assets/images/location.png");


interface ContactInformationProps {
    phoneNumber: string;
    email: string;
    address: string;
}

const ContactInformation: React.FC<ContactInformationProps> = ({
                                                                   phoneNumber,
                                                                   email,
                                                                   address
                                                               }) => {
    return (
        <View style={styles.container}>
            <ContactInformationItem
                iconUrl={phoneIconUrl}
                text={phoneNumber} />

            <ContactInformationItem
                iconUrl={emailIconUrl}
                text={email} />

            <ContactInformationItem
                iconUrl={addressIconUrl}
                text={address}
                isMultiline={true}
            />
        </View>
    );
};

export default ContactInformation;
