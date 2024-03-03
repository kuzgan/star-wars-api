import React from 'react';
import { People } from './components/People/People';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomePage } from './components/HomePage/HomePage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Link to="/people">People page</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace={true} />} />
          <Route path="/people" element={<People />}>
            <Route path=":id" element={<People />} />
          </Route>
          <Route path="/vehicles" element={<People />}>
            <Route path=":id" element={<People />} />
          </Route>
          <Route path="/starships" element={<People />}>
            <Route path=":id" element={<People />} />
          </Route>
          <Route path="/species" element={<People />}>
            <Route path=":id" element={<People />} />
          </Route>
          <Route path="/planets" element={<People />}>
            <Route path=":id" element={<People />} />
          </Route>
          <Route path="/films" element={<People />}>
            <Route path=":id" element={<People />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
