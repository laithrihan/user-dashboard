import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import GridCard from './GridCard';
import Grid from '@mui/material/Grid';
import { User, UserGridProps } from '../types';

const UserGrid: React.FC<UserGridProps> = ({ users }) => {
  const primary = blue[500];

  return (
    <Box sx={{ width: '100%', backgroundColor: primary, mt: '10vh', boxShadow: 6 }}>
      <Grid container sx={{ pt: '50px', pb: '80px', backgroundColor: blue[600], width: '80%', m: 'auto' }}>
        {users?.map((user: User) => (
          <Grid
            key={user.id}
            item
            xl={4}
            md={6}
            xs={12}
            sx={{ m: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <GridCard
              id={user.id}
              name={user.name}
              email={user.email}
              city={user.address.city}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserGrid;
