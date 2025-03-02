import * as React from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';

export default function ContactForm() {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography variant="h5" sx={{ fontSize: '1.5rem', fontWeight: '600', color: '#1e40af', marginTop: '0.5rem', marginBottom: '1rem', textAlign: 'center' }}
      >
        Besoin d’un professionnel pour vos travaux ?
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Nom" required variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="E-Mail" required type="email" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Code Postal" required variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Ville" required variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Téléphone" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Vous êtes une entreprise ?" placeholder="Raison Sociale" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Votre demande" required multiline rows={4} variant="outlined" />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" size="large">
            Envoyer
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
