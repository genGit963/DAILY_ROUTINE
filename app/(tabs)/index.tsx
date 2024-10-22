import React from "react";
import { StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  getCurrentDay,
  getCurrentMonthName,
  getFullDate,
  getTodayWeekday,
} from "@/utils/date";

export default function HomeScreen() {
  const describeToday: string = `${getTodayWeekday()}, ${getCurrentDay()} ${getCurrentMonthName()}`;
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <>
          <ThemedText type="heading1">My Today</ThemedText>
          <ThemedText>{describeToday}</ThemedText>
        </>
      }
      requiredHeader={true}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
