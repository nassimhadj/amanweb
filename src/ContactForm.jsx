import * as React from 'react';
import { useState } from 'react';
import { 
  TextField, 
  Button, 
  Grid, 
  Box, 
  Typography, 
  IconButton,
  Paper,
  Divider,
  Chip,
  CircularProgress,
  Alert,
  Snackbar
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { API_URL } from './api.config';
// API URL - Replace with your actual API URL
 // Update this to your actual API URL

export default function RdvForm() {
  // Main form state - without etapes since they're admin-only
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    name: '',
    phone: '',
    address: '',
    description: '',
    attachments: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle main form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newAttachments = files.map(file => ({
      file: file,
      filename: file.name,
      path: URL.createObjectURL(file),
      uploadDate: new Date()
    }));

    setFormData({
      ...formData,
      attachments: [...formData.attachments, ...newAttachments]
    });
  };

  // Remove an attachment
  const removeAttachment = (index) => {
    const updatedAttachments = formData.attachments.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      attachments: updatedAttachments
    });
  };

  // Get file icon based on extension
  const getFileIcon = (filename) => {
    const extension = filename.split('.').pop().toLowerCase();
    // You could add more icons based on file types
    return <InsertDriveFileIcon />;
  };

  // Validate form
  const validateForm = () => {
    if (!formData.title || !formData.email || !formData.name || !formData.phone || !formData.address || !formData.description) {
      setErrorMessage("Tous les champs sont obligatoires.");
      setSubmitError(true);
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("L'adresse email n'est pas valide.");
      setSubmitError(true);
      return false;
    }

    // Phone validation - allow only numbers and check length
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage("Le numéro de téléphone doit contenir 10 chiffres.");
      setSubmitError(true);
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError(false);
    
    try {
      const formDataToSend = new FormData();
      
      // Add basic fields
      formDataToSend.append('title', formData.title);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('status', 'proposé'); // Default status from schema
      
      // Empty etapes array as per your requirement
      formDataToSend.append('etapes', JSON.stringify([]));
      
      // Add attachments
      for (let i = 0; i < formData.attachments.length; i++) {
        const attachment = formData.attachments[i];
        formDataToSend.append('attachments', attachment.file);
      }
      
      // Send to server
      const response = await fetch(`${API_URL}/rdv`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
          // Don't set Content-Type header - browser will set it with proper boundary for FormData
        }
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Erreur lors de l\'envoi de votre demande');
      }
      
      // Success
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        title: '',
        email: '',
        name: '',
        phone: '',
        address: '',
        description: '',
        attachments: []
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error.message || 'Une erreur est survenue lors de l\'envoi de votre demande');
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Paper elevation={4} sx={{ p: 3, mb: 4, borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ bgcolor: '#1e40af', mx: -3, mt: -3, p: 2, mb: 3 }}>
          <Typography variant="h5" sx={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: 'white', 
            textAlign: 'center' 
          }}>
            Besoin d'un professionnel pour vos travaux ?
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              name="title" 
              label="Titre de votre projet" 
              required 
              variant="outlined" 
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex: Rénovation de salle de bain"
            />
          </Grid>
          
          <Grid item xs={12}>
            <Divider>
              <Chip label="Vos coordonnées" size="small" />
            </Divider>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              name="name" 
              label="Nom et prénom" 
              required 
              variant="outlined" 
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              name="email" 
              label="E-Mail" 
              required 
              type="email" 
              variant="outlined" 
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              name="phone" 
              label="Téléphone" 
              required
              variant="outlined" 
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              name="address" 
              label="Adresse complète" 
              required 
              variant="outlined" 
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Divider>
              <Chip label="Détails du projet" size="small" />
            </Divider>
          </Grid>
          
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              name="description" 
              label="Votre demande" 
              required
              multiline 
              rows={4} 
              variant="outlined" 
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez votre projet en détail (matériaux, dimensions, délais souhaités, etc.)"
              helperText="Plus vous donnez de détails, mieux nous pourrons répondre à vos besoins"
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={4} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
          Documents supplémentaires
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          Joignez des photos, plans ou tout autre document utile à la compréhension de votre projet
        </Typography>
        
        <Button
          variant="outlined"
          component="label"
          startIcon={<AttachFileIcon />}
          sx={{ mb: 2 }}
        >
          Joindre des fichiers
          <input
            type="file"
            hidden
            multiple
            onChange={handleFileChange}
          />
        </Button>

        {formData.attachments.length > 0 ? (
          <Paper variant="outlined" sx={{ mt: 2, maxHeight: 200, overflow: 'auto' }}>
            <List dense>
              {formData.attachments.map((attachment, index) => (
                <ListItem 
                  key={index}
                  secondaryAction={
                    <IconButton edge="end" onClick={() => removeAttachment(index)} size="small">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  }
                >
                  <ListItemIcon>
                    {getFileIcon(attachment.filename)}
                  </ListItemIcon>
                  <ListItemText 
                    primary={attachment.filename} 
                    secondary={new Date(attachment.uploadDate).toLocaleString()} 
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        ) : (
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', fontStyle: 'italic', mt: 2 }}>
            Aucun fichier ajouté
          </Typography>
        )}
      </Paper>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          type="submit"
          disabled={isSubmitting}
          endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
          sx={{ 
            px: 4, 
            py: 1.5,
            borderRadius: 2,
            boxShadow: 3,
            position: 'relative'
          }}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
        </Button>
      </Box>

      {/* Success Snackbar */}
      <Snackbar 
        open={submitSuccess} 
        autoHideDuration={5000}
        onClose={() => setSubmitSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled">
          Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar 
        open={submitError} 
        autoHideDuration={5000}
        onClose={() => setSubmitError(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" variant="filled">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}