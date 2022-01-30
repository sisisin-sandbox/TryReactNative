/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeProps['navigation']>();
  return (
    <View style={styles.homeView}>
      <Text>Home Screen</Text>
      <Button
        title="Go t Details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
};
const DetailsScreen = () => {
  return (
    <View style={styles.homeView}>
      <Text>Detail Screen</Text>
    </View>
  );
};

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeView: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default App;
