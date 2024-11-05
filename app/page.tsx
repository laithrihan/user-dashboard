import { Pagination } from "@mui/material";
import React from "react";
import Hero from "./components/Hero";
import UserGrid from "./components/UserGrid";
import { User } from "./types";



export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

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
