import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import RegisterForm from '../components/forms/RegisterForm';
import Link from 'next/link';
import { blue } from '@mui/material/colors';

const RegisterPage = () => {
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
        backgroundColor: blue[500]
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
        <Typography variant="h4" component="h1" align="center" gutterBottom mb={3}>
          Register
        </Typography>
        <RegisterForm />
        <Box display={'flex'} justifyContent={'center'} alignItems={"center"} gap={1} mt={2}>

          <Typography variant="h6" color="initial">{`Already have an account ?`} </Typography>

          <Typography variant="h6" color={blue[600]}>
            <Link href="/login" >
              Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
