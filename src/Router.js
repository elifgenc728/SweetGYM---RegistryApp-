import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';
import React from 'react';
import CreateRegistry from './pages/CreateRegistry';
import MemberHomePage from './pages/MemberHomePage';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'transparan' } }}>
                <Stack.Screen name="WelcomeScreen" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name='CreateRegistry' component={CreateRegistry} options={{ title: 'Create Registry', headerStyle: { backgroundColor: 'transparan' } }} />
                <Stack.Screen name='MemberHomePage' component={MemberHomePage} options={{title:'Member Home Page'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;