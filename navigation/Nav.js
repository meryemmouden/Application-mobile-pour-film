import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FilmDetail from '../Components/FilmDetail';
import Search from '../Components/Search';

const Stack = createNativeStackNavigator();
//Son rôle est de définir la structure de navigation de l'application et de spécifier quelles vues 
//(écrans) doivent être affichées pour chaque étape de la navigation.
const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{title: 'Les Derniers Films '}}
        />

        <Stack.Screen name="Details"
         component={FilmDetail} 
        
         
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Nav;