import { Text, View } from "react-native"
import { Image } from "react-native"
import { styles } from "../components/styles";


export default function SplashScreeen(){
    return (
        <View style={styles.container}>
        <Image
        source={{ uri: require("../../assets/gato.jpg") }}
        style={{ width: 200, height: 200, marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text>obrigado miau</Text>
        </View>
    )
}