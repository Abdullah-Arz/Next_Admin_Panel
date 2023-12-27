"use client"
import { NextUIProvider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function Providers({ children }) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const currentRoute = usePathname();
  useEffect(() => {
    // Check for sessionStorage in a client-side context
    const Token = sessionStorage.getItem('Token');
    const publicRoutes = ['/', '/login', '/forgetPassword']; 

    if (!Token && !publicRoutes.includes(currentRoute)) {
      // router.replace('/');

    }
      setAuthChecked(true);
  }, [router.pathname]); // Empty dependency array means this code runs only after component mount
  if (!authChecked) {
    // Don't render anything while authentication is being checked
    return null;

  }
  return (
    <NextUIProvider theme={{ type: 'dark' }}>
      
      {children}
    </NextUIProvider>
  );
}
