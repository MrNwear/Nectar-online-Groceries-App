import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from './search';
import { ShopScreen } from './shop';
import { CartScreen } from './cart';
import { FavoriteScreen } from './favorite';
import { ProfileScreen } from './profile';
const Tab = createBottomTabNavigator();

export const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#53B175',
                tabBarInactiveTintColor: '#181725',
                tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                tabBarStyle: {
                    paddingBottom: 5,
                    borderTopWidth: 0,
                },
            }}
            sceneContainerStyle={{ backgroundColor: '#fff' }}>
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/shop.png')}
                            resizeMode="center"
                            style={{ tintColor: focused ? '#53B175' : '#181725', height: 22, width: 22, resizeMode: 'contain' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/search.png')}
                            resizeMode="center"
                            style={{ tintColor: focused ? '#53B175' : '#181725', height: 22, width: 22, resizeMode: 'contain' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/cart.png')}
                            resizeMode="center"
                            style={{ tintColor: focused ? '#53B175' : '#181725', height: 22, width: 22, resizeMode: 'contain' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/favorite.png')}
                            resizeMode="center"
                            style={{ tintColor: focused ? '#53B175' : '#181725', height: 22, width: 22, resizeMode: 'contain' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/profile.png')}
                            resizeMode="center"
                            style={{ tintColor: focused ? '#53B175' : '#181725', height: 22, width: 22, resizeMode: 'contain' }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
