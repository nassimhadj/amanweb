import React from 'react';
import ContactForm from './ContactForm';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';
import { Box, Typography, Grid, Paper, Divider, useMediaQuery, useTheme } from '@mui/material';
import { API_URL } from './api.config'; // Import API configuration

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // You could add functionality to fetch contact information from the server if needed
  // For example:
  /*
  const [contactInfo, setContactInfo] = useState({
    phone: '+33 (0) 6 50 13 31 27',
    email: 'amanpro.angers@gmail.com',
    address: {
      street: '3 Allée du Vieux Chêne',
      city: 'Écuillé',
      postalCode: '49460',
      region: 'Maine et Loire, France'
    }
  });

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch(`${API_URL}/contact-info`);
        if (response.ok) {
          const data = await response.json();
          setContactInfo(data);
        }
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };
    
    fetchContactInfo();
  }, []);
  */

  return (
    <div>
      {/* Contact Header */}
      <Box sx={{ 
        bgcolor: '#f8f9fa', 
        py: 6, 
        textAlign: 'center' 
      }}>
        <Typography variant="h3" component="h1" sx={{ 
          color: '#0077b6', 
          fontWeight: 'light', 
          mb: 2 
        }}>
          CONTACTEZ AMANPRO
        </Typography>
        <Typography variant="body1" sx={{ 
          maxWidth: '800px', 
          mx: 'auto', 
          px: 3, 
          color: '#4a4a4a' 
        }}>
          Pour toute demande de devis , information ou intervention d'urgence, 
          n'hésitez pas à nous contacter. Notre équipe est à votre disposition pour répondre 
          à toutes vos questions.
        </Typography>
      </Box>

      {/* Contact Info and Form Section */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 3, my: 4 }}>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" sx={{ 
                color: '#0077b6', 
                mb: 3, 
                fontWeight: 'medium' 
              }}>
                Nos coordonnées
              </Typography>
              
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <Phone color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Téléphone
                  </Typography>
                  <Typography variant="body1">
                    +33 (0) 6 50 13 31 27
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <Email color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Email
                  </Typography>
                  <Typography variant="body1">
                    amanpro.angers@gmail.com
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'flex-start' }}>
                <LocationOn color="primary" sx={{ mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Adresse
                  </Typography>
                  <Typography variant="body1">
                    3 Allée du Vieux Chêne<br />
                    49460 Écuillé<br />
                    Maine et Loire, France
                  </Typography>
                </Box>
              </Box>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h6" sx={{ color: '#0077b6', mb: 2 }}>
                Zone d'intervention
              </Typography>
              <Typography variant="body1">
                Nous intervenons sur Angers et sa région , 49 (Maine-et-Loire)
              </Typography>
            </Paper>
          </Grid>
          
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <ContactForm apiUrl={API_URL} />
          </Grid>
        </Grid>
      </Box>
      
      {/* Map Section */}
      <Box sx={{ width: '100%', height: '400px', mb: 4 }}>
        <Typography variant="h5" sx={{ 
          textAlign: 'center', 
          mb: 3, 
          color: '#0077b6' 
        }}>
          Notre localisation
        </Typography>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5378.984900666504!2d-0.5563110000000094!3d47.61655800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480864b8659728a1%3A0x483d5e9bca6dce27!2zMyBBbGwuIGR1IFZpZXV4IENow6puZSwgNDk0NjAgw4ljdWlsbMOp!5e0!3m2!1sfr!2sfr!4v1741341740874!5m2!1sfr!2sfr"    
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </Box>
    </div>
  );
}