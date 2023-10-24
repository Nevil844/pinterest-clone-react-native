import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarShowLabel: false,
      }}>

      {/* <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      /> */}

      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <FontAwesome name='home' size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="CreatePinScreen"
        options={{
          title: 'Create Pin',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <FontAwesome name='plus' size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <FontAwesome name='user' size={30} color={color} />,
        }}
      />
    </Tabs>
  );
}
