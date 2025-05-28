import React from 'react';
import { Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRouter } from './components/AppRouter';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import '../src/sass/layouts/app.scss';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Breadcrumbs />
        <AppRouter />
      </div>
    </QueryClientProvider>
  );
}

export default App;
