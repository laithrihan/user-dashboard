import React from "react";
import { Box, Typography, Paper, Stack, Divider } from "@mui/material";
import { blue, orange } from "@mui/material/colors";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { getUsersRoutesData } from "@/app/api/users";
export default async function UserPage({ params }: { params: { id: string } }) {
  const { user, error } = await getUsersRoutesData(params.id);

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="93vh"
        bgcolor={blue[500]} >
        <Typography variant="h4" color="white">
          {error.message}
        </Typography>
      </Box>)
  }
  else
    return (

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="93vh"
        bgcolor={blue[500]}
      >
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2, sm: 3, md: 4 }, // Padding responsive to screen size
            maxWidth: 600,
            bgcolor: "#E0F7FA",
            color: "white",
            borderRadius: 3,
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="h4"
              color={blue[600]}
              component="h1"
              fontWeight="bold"
              textAlign="center"
              sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} // Responsive font size
            >
              {user?.name}
            </Typography>

            <Divider variant="middle" sx={{ bgcolor: "white", opacity: 0.8 }} />

            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
              <Image
                src="/user2.jpg"
                style={{ borderRadius: '15px' }}
                width={500}
                height={500}
                alt="Picture of the user"
              />
            </Box>

            <Divider variant="middle" sx={{ bgcolor: "white", opacity: 0.8 }} />

            <Box display="flex" alignItems="center">
              <PersonIcon sx={{ color: orange[500], mr: 1 }} />
              <Typography
                variant="h6"
                component="p"
                color={blue[800]}
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} // Responsive font size
              >
                <strong>Username:</strong> {user?.username}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <EmailIcon sx={{ color: orange[500], mr: 1 }} />
              <Typography
                color={blue[800]}
                variant="h6"
                component="p"
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} // Responsive font size
              >
                <strong>Email:</strong> {user?.email}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <LocationOnIcon sx={{ color: orange[500], mr: 1 }} />
              <Typography
                color={blue[800]}
                variant="h6"
                component="p"
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} // Responsive font size
              >
                <strong>Address:</strong> {`${user?.address.street}\n ${user?.address.suite}\n ${user?.address.city}`}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <ContactMailIcon sx={{ color: orange[500], mr: 1 }} />
              <Typography
                color={blue[800]}
                variant="h6"
                component="p"
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} // Responsive font size
              >
                <strong>Zipcode:</strong> {`${user?.address.zipcode}`}
              </Typography>
            </Box>

          </Stack>
        </Paper>
      </Box>
    );
}
