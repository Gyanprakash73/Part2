import {StyleSheet, Text, View, Image, LogBox} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import MandiPrice from '../../assets/images/path7.svg';
import Krishi from '../../assets/images/Group 188.svg';
import Home from '../../assets/images/Path 10.svg';
import KrishiComm from '../../assets/images/Path 21.svg';
import Store from '../../assets/images/Path 22.svg';

const Tab = createBottomTabNavigator();
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          paddingBottom: 10,
          borderTopWidth: 0,
          ...styles.shadow,
        },
      }}
      initialRouteName={'HomeScreen'}
      backBehavior={'initialRoute'}>
      <Tab.Screen
        name="Mandi Price"
        component={() => {}}
        options={{
          tabBarLabel: 'Mandi Price',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: 'VollkornSC-SemiBold',
          },
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <View style={styles.selectedTabBgColor} /> : null}
              <MandiPrice />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Krishi Doctor"
        component={() => {}}
        options={{
          tabBarLabel: 'Krishi Doctor',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <View style={styles.selectedTabBgColor} /> : null}
              <Krishi />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <View style={styles.selectedTabBgColor} /> : null}
              <Home />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Krishi Community"
        component={() => {}}
        options={{
          tabBarLabel: 'Krishi Community',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <View style={styles.selectedTabBgColor} /> : null}
              <KrishiComm />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={() => {}}
        options={{
          tabBarLabel: 'Store',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <View style={styles.selectedTabBgColor} /> : null}
              <Store />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  selectedTabBgColor: {
    backgroundColor: '#417E39',
    width: 28,
    height: 28,
    borderRadius: 999,
    position: 'absolute',
    top: -7,
  },
});

export default BottomTabNavigator;
