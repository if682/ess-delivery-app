import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppContainer from '../../components/Container';
import ResponsiveAppBar from '../../components/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import ReservationForm from '../../components/FormularioReserva';

const ReservationPage: React.FC = () => {
  return (
    <>
      
        <ReservationForm/>
      
    </>
  );
};

export default ReservationPage;