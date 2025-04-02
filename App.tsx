// App.tsx
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login"; // Ajuste o caminho conforme necessário

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // Remove o header para todas as telas
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        {/* Outras telas, como Home, Dashboard etc. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
