import { useState } from "react";
import { Text, View,} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "../components/styles";

export function HomeScreen ({ navigation }) {
  const [nome, setNome] = useState("?");
  const [Telefone, setTelefone] = useState("");
  const [Email, setEmail] = useState("@gmail.com");
  return (
    <View style={styles.container}>
      <Text>Olá {nome}</Text>
      <TextInput label="Nome" value={nome} onChangeText={setNome} />
      <Text>Seu Telefone</Text>
      <TextInput
        label="Telefone"
        value={Telefone}
        onChangeText={setTelefone}
        keyboardType="numeric"
      />
      <Text>Seu Email</Text>
      <TextInput
        label="Email"
        value={Email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
   <Button 
   style={styles.botao}
    onPress={() => navigation.navigate("Splash")}>Enviar</Button>
    </View>
  );
}