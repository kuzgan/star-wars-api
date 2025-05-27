import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { People } from './People/People';
import { PersonPage } from './People/PersonPage/PersonPage';
import { Vehicles } from './Vehicles/Vehicles';
import { VehiclePage } from './Vehicles/VehiclePage/VehiclePage';
import { Starships } from './starships/starships';
import { StarshipPage } from './starships/starshipPage/starshipPage';
import { Planets } from './Planets/Planets';
import { PlanetPage } from './Planets/PlanetPage/PlanetPage';
import { Films } from './Films/Films';
import { FilmPage } from './Films/FilmPage/FilmPage';
import { Species } from './Species/Species';
import { SpeciesPage } from './Species/SpeciesPage/SpeciesPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" replace={true} />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/:id" element={<PersonPage />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/vehicles/:id" element={<VehiclePage />} />
      <Route path="/starships" element={<Starships />} />
      <Route path="/starships/:id" element={<StarshipPage />} />
      <Route path="/species" element={<Species />} />
      <Route path="/species/:id" element={<SpeciesPage />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/planets/:id" element={<PlanetPage />} />
      <Route path="/films" element={<Films />} />
      <Route path="/films/:id" element={<FilmPage />} />
    </Routes>
  );
};
