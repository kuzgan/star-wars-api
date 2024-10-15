import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { People } from './People/People';
import { PersonPage } from './People/PersonPage/PersonPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" replace={true} />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/:id" element={<PersonPage />} />
      <Route path="/vehicles" element={<People />} />
      <Route path="/vehicles/:id" element={<People />} />
      <Route path="/starships" element={<People />} />
      <Route path="/starships/:id" element={<People />} />
      <Route path="/species" element={<People />} />
      <Route path="/species/:id" element={<People />} />
      <Route path="/planets" element={<People />} />
      <Route path="/planets/:id" element={<People />} />
      <Route path="/films" element={<People />} />
      <Route path="/films/:id" element={<People />} />
    </Routes>
  );
};
