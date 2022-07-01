import * as React from 'react';
import { View } from 'react-native';
import { Theme, Button } from 'react-native-ui-components';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: 20,
        }}
      >
        <Button>Teste</Button>
      </View>
    </ThemeProvider>
  );
}
