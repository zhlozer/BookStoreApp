// AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/services/firebase";
import { User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    // Check the path when user state changes
    const handleRouteChange = (url: string) => {
      // Allow access to login page
      if (url === "/login" && user) {
        router.push("/"); // Redirect authenticated user to home
      } else if (url !== "/login" && !user) {
        router.push("/login"); // Redirect unauthenticated user to login
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      unsubscribe();
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [user, router]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
