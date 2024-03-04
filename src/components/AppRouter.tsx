import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { People } from './People/People';

export const AppRouter = () => {
  return (
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
  );
};
