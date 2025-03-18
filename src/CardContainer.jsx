import * as React from 'react';
import MultiActionAreaCard from './MultiActionAreaCard';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function CardContainer() {
  const navigate = useNavigate();

  // Handler function to navigate to different routes
  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ padding: 2, maxWidth: '1000px', margin: 'auto' }}>
      {/* First row with three cards */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={6}
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: '50px' }}
      >
        <MultiActionAreaCard 
          title="Électricité" 
          description="Services d'installation et de maintenance électrique." 
          imageLink="elec.jpg"
          onClick={() => handleCardClick('/electricite')}
        />
        <MultiActionAreaCard 
          title="Plomberie" 
          description="Solutions de plomberie professionnelles pour votre maison et votre entreprise." 
          imageLink="plumbing.jpg"
          onClick={() => handleCardClick('/plomberie')}
        />
        <MultiActionAreaCard 
          title="Chauffage" 
          description="Installation et réparation fiables des systèmes de chauffage." 
          imageLink="heating.jpg"
          onClick={() => handleCardClick('/chauffage')}
        />
      </Box>

      {/* Second row with two centered cards */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)' }}
        gap={4}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: '20px' }}
      >
        <MultiActionAreaCard 
          title="Salle de bains" 
          description="Rénovation et aménagement de salles de bains modernes et fonctionnelles." 
          imageLink="salle-de-bains.png"
          onClick={() => handleCardClick('/salle-de-bains')}
        />
        <MultiActionAreaCard 
          title="Cuisinettes" 
          description="Optimisation et installation de cuisines compactes et pratiques." 
          imageLink="cuisinette.jpg"
          onClick={() => handleCardClick('/cuisinettes')}
        />
      </Box>
    </Box>
  );
}