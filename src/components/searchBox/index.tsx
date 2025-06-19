import * as React from "react";
import { View, Image, TextInput } from "react-native";
import { styles } from "./styles"

interface SearchBoxProps {
    onSearch?: (text: string) => void;
}

export function SearchBox ({ onSearch }: Readonly<SearchBoxProps>) {
    const [searchText, setSearchText] = React.useState("");

    const handleTextChange = (text: string) => {
        setSearchText(text);
        if (onSearch) {
            onSearch(text);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Filtrar busca"
                    placeholderTextColor="#48D1CC"
                    value={searchText}
                    onChangeText={handleTextChange}
                />
            </View>
            <Image
                source={require('../../../assets/images/icons8-procurar-usuário-64.png')}
                style={styles.filterIcon}
            />
        </View>
    );
};



