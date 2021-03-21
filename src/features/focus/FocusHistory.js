import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';

import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

const HistoryItem = ({ item, index }) => {
  return (
    <Text style={styles.historyItem}>
      {item.subject} {item.status > 1 ? '❌' : '✅'}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Focused on:</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  historyItem: {
    fontSize: fontSizes.md,
    color: colors.white,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
