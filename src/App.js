import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AuthGuard from './_helpers/AuthGuard';
import About from './pages/About';
import AuthRouter from './pages/Auth/AuthRouter';
import Vehicule from './pages/Vehicule/Vehicule';
import VehiculeAdd from './pages/Vehicule/VehiculeAdd';
import VehiculeInfo from './pages/Vehicule/VehiculeInfo';
import VehiculeEdit from './pages/Vehicule/VehiculeEdit';
import AlertePerso from './pages/Alerte/AlertePerso';
import AlerteStatut from './pages/Alerte/AlerteStatut';
import AlerteStatutClos from './pages/Alerte/AlerteStatutClos';
import FactureHome from './pages/Facture/FactureHome';
import FactureAdd from './pages/Facture/FactureAdd';
import FactureEdit from './pages/Facture/FactureEdit';
import FactureVehicule from './pages/Facture/FactureVehicule';
import FactureHistorique from './pages/Facture/FactureHistorique';
import FactureChoix from './pages/Facture/FactureChoix';
import Creer from './pages/Auth/Creer';
import FactureInfo from './pages/Facture/FactureInfo';
import ContactMention from './pages/ContactMention';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AuthGuard>
            <Home />
          </AuthGuard>
        } />

        <Route path="/about" element={
          <AuthGuard>
            <About />
          </AuthGuard>
        } />

        <Route path="/info" element={
          <AuthGuard>
            <ContactMention />
          </AuthGuard>
        } />

        <Route path="/creer" element={<Creer />} />

{/* ------------------------------------------SECTION VEHICULE------------------------------------------ */}
        
        <Route path="/vehicule/info/:id" element={
          <AuthGuard>
            <VehiculeInfo />
          </AuthGuard>
        } />

        <Route path="/vehicule/edit/:id" element={
          <AuthGuard>
            <VehiculeEdit />
          </AuthGuard>
        } />

        <Route path="/vehicule/list" element={
          <AuthGuard>
            <Vehicule />
          </AuthGuard>
          } />
          
        <Route path="/vehicule/add" element={
          <AuthGuard>
            <VehiculeAdd />
          </AuthGuard>
          } />

{/* ------------------------------------------SECTION  ALERTE------------------------------------------ */}

        <Route path="/alerte" element={
          <AuthGuard>
            <AlertePerso />
          </AuthGuard>
        } />

        <Route path="/alerte/info/:id" element={
          <AuthGuard>
            <AlerteStatut />
          </AuthGuard>
        } />

        <Route path="/alerte/statut/clos" element={
          <AuthGuard>
            <AlerteStatutClos />
          </AuthGuard>
        } />

        

{/* ------------------------------------------SECTION FACTURE------------------------------------------ */}
        
        
        <Route path="/facture/" element={
          <AuthGuard>
            <FactureHome />
          </AuthGuard>
        } />


        <Route path="/facture/add/:id" element={
          <AuthGuard>
            <FactureAdd />
          </AuthGuard>
        } />


        <Route path="/facture/edit/:id" element={
          <AuthGuard>
            <FactureEdit />
          </AuthGuard>
        } />


        <Route path="/facture/vehicule/:id" element={
          <AuthGuard>
            <FactureVehicule />
          </AuthGuard>
        } />


        <Route path="/facture/historique" element={
          <AuthGuard>
            <FactureHistorique />
          </AuthGuard>
        } />


        <Route path="/facture/vehicule" element={
          <AuthGuard>
            <FactureChoix />
          </AuthGuard>
        } />


        <Route path="/facture/info/:id" element={
          <AuthGuard>
            <FactureInfo />
          </AuthGuard>
        } />
        

        <Route path="/auth/*" element={<AuthRouter />} />

        {/* possibilité de faire une route sur * pour gérer les erreurs */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
