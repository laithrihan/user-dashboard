// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { LoginProvider } from "./context/LoginContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoginProvider>
          <ToastContainer 
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          
          /> 
          <main>
            <NavBar />
            {children}
          </main>
        </LoginProvider>
      </body>
    </html>
  );
}
