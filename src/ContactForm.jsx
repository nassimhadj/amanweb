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
  CircularProgress
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

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
      filename: file.name,
      path: URL.createObjectURL(file), // This would be handled differently in production
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      
      // Here you would send the data to your API
      // Note: status will be set to default 'proposé' as per schema
    }, 1500);
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
              label="Titre de votre chantier" 
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
              label="Nom et prenom" 
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
              <Chip label="Détails du chantier" size="small" />
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
              placeholder="Décrivez votre problème en détail (matériaux, dimensions, délais souhaités, etc.)"
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
          Joignez des photos, plans ou tout autre document utile à la compréhension de votre cas
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
        
        {submitSuccess && (
          <Typography variant="body2" sx={{ color: 'success.main', mt: 2 }}>
            Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.
          </Typography>
        )}
      </Box>
    </Box>
  );
}