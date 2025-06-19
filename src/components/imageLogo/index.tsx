import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

export const ImageLogo = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/images/logo_psi-removebg-preview.png")}
                style={styles.image}
            />
        </View>
    );
};

export default ImageLogo;