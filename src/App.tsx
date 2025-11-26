import React from 'react';
import { Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRouter } from './components/AppRouter';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import '../src/sass/layouts/app.scss';
import '../src/sass/style.scss';
import { Header } from './components/Header/Header';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <main>
          <Breadcrumbs />
          <AppRouter />
        </main>
        {/* <Footer/> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
