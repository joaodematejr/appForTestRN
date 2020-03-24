/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// eslint-disable-next-line prettier/prettier
import { Text, SafeAreaView, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import QuickActions from 'react-native-quick-actions';

export default function RNAppShortcutsTest() {
  function handleAdd() {
    QuickActions.setShortcutItems([
      {
        type: 'Orders', // Required
        title: 'See your orders', // Optional, if empty, `type` will be used instead
        subtitle: "See orders you've made",
        icon: 'Compose', // Icons instructions below
        userInfo: {
          url: 'app://orders', // Provide any custom data like deep linking URL
        },
      },
    ]);
  }

  function handleSupport() {
    QuickActions.isSupported((error, supported) => {
      if (!supported) {
        console.log(
          'Device does not support 3D Touch or 3D Touch is disabled.',
        );
      }
    });
  }

  function handleCheckExistence() {
    DeviceEventEmitter.addListener('quickActionShortcut', data => {
      console.log(data.title);
      console.log(data.type);
      console.log(data.userInfo);
    });
  }

  function handleRemoveAll() {
    QuickActions.clearShortcutItems();
  }

  return (
    <SafeAreaView
      // eslint-disable-next-line prettier/prettier
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => handleAdd()}>
        <Text>Add Atalho</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCheckExistence()}>
        <Text>Verifique a existência</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleRemoveAll()}>
        <Text>Remover</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSupport()}>
        <Text>Suporte3d</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
