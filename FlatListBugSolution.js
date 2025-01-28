```javascript
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

const FlatListBugSolution = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default FlatListBugSolution;
```