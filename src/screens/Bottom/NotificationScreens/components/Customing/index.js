import {Block, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

function Customing({state, descriptors, navigation, style}) {
  const config = useSelector(state => state.config?.data);

  return (
    <Block row justifyCenter alignCenter paddingVertical={12}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              ...style,
              ...styles.container(isFocused, config?.backgroundcolor),
            }}>
            <Text style={styles.textStyle(isFocused)}>{label}</Text>
          </Pressable>
        );
      })}
    </Block>
  );
}
export default Customing;
