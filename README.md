# React Native FlatList Performance Issue

This repository demonstrates a common performance issue in React Native's FlatList component when dealing with large datasets and how to resolve it using a proper `keyExtractor`.

## Problem

Rendering a FlatList with a large number of items without a unique `keyExtractor` can lead to significant performance degradation and potential crashes.  React Native struggles to efficiently update the list when data changes without unique keys, resulting in unnecessary re-renders.

## Solution

The solution is to provide a unique `key` for each item in the data array using the `keyExtractor` prop. This allows React Native to efficiently update only the necessary items when changes occur.

## Usage

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` or `yarn install`.
4. Run the app using `npx react-native run-android` or `npx react-native run-ios`.

## Files

- `FlatListBug.js`: Demonstrates the performance issue without a `keyExtractor`.
- `FlatListBugSolution.js`: Shows the solution with a properly implemented `keyExtractor`.