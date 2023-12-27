'use client'

import React, { useEffect } from "react";
import { Providers } from "./provider"; // Import your other providers
import { Inter } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import { MyProvider } from "./context"; // Import the context provider
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });
;  

export default function RootLayout({ children }) {

  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head>
      <title>Nutritions</title>
      </head>
      <body className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <Providers>
          
            <MyProvider>
              <ToastContainer
                autoClose={1000}
                closeOnClick
                pauseOnHover
                theme="colored"
              />
              {children}
            </MyProvider>
          
        </Providers>
        </QueryClientProvider>
      </body>
    </html>
  );
}
