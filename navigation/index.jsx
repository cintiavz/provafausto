import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../src/screens/HomeScreen";
import SplashScreeen from "../src/screens/SplashScreen";



const Tab = createBottomTabNavigator();
export const RootNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Formulário"} component={HomeScreen}  />
            <Tab.Screen name={"Splash"} component={SplashScreeen} />
        
           
        </Tab.Navigator>
    );
};