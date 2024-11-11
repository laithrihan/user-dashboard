"use client"
import React from 'react';
import { Typography, Paper, Box, Snackbar } from '@mui/material';
import LoginForm from '../components/forms/LoginForm';
import { blue } from '@mui/material/colors';
import Link from 'next/link';

const LoginPage = () => {
  


  return (
    <Box
      component="main"
      width={"100%"}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '93vh',
        p: { xs: 2, sm: 4, md: 6 },
        backgroundColor: blue[500],
      }}

    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 500,
          p: { xs: 5, sm: 6, md: 6 },
          borderRadius: 2,
          boxShadow: 3,
        }}

      >
        <Typography variant="h4" component="h1" align="center" mb={3} gutterBottom>
          Login
        </Typography>
        <LoginForm />
        <Box display={'flex'} justifyContent={'center'} alignItems={"center"} gap={1} mt={2}>
          <Typography variant="h6" color="initial">{`Don't have an account ?`} </Typography>
          <Typography variant="h6" color={blue[600]}>
            <Link href="/register" color={blue[600]} >
              Signup
            </Link>
          </Typography>
        </Box>
      </Paper>

      <Snackbar/>

    </Box>
  );
};

export default LoginPage;
