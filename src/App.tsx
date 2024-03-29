import React from 'react';
import { Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRouter } from './components/AppRouter';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Link to="/home">People page</Link>
        <AppRouter />
      </div>
    </QueryClientProvider>
  );
}

export default App;
