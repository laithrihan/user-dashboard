import { Pagination, Box, Typography } from "@mui/material";
import React from "react";
import Hero from "./components/Hero";
import UserGrid from "./components/UserGrid";
import { getUsersData } from "./api/users";
import { blue } from "@mui/material/colors";


export default async function Page() {
  const { users, error } = await getUsersData();
  
  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="93vh"
        bgcolor={blue[500]}
      >
        <Typography variant="h4" color="white">
          {error.message}
        </Typography>
      </Box>
    );
  }
  return (
    <>
      <Hero />
      <UserGrid users={users} />
      <Pagination
        count={5}
        sx={{ display: "flex", justifyContent: "center", m: "20px 0" }}
      />
    </>
  );
}
