import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Stack } from 'expo-router';
import '../global.css';

const RootLayout = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack 
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  )
}

export default RootLayout