import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator";
import CheckoutScreen from "../screens/Checkout";
import Color from "../constants/Color";

type RootStackParamList = {
  Login: undefined;
  Drawer: undefined;
  Checkout: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          title: "Checkout",
          headerTitleStyle: {
            color: Color.PRIMARY,
          }, // Customize the title if needed
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
