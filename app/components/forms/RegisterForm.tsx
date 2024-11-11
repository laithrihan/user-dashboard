'use client'
import React from 'react';
import { Grid, TextField, Button, Box } from '@mui/material';
import { useRegisterForm } from '@/app/hooks/useRegisterForm';

const RegisterForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useRegisterForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            label="Username"
            fullWidth
            variant="outlined"
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, height:"50px",display:"flex" ,justifyContent:"center" }}>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;
