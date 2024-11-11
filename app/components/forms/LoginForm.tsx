"use client"
import { Grid, TextField, Button, Box } from '@mui/material';
import { useLoginForm } from '@/app/hooks/useLoginForm';

const LoginForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={5}>
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
        <Button type="submit" variant="contained" color="primary" sx={{height:"100%" , width:"100%" }}>
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
