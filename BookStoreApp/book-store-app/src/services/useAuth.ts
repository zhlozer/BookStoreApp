// src/services/useAuth.ts
import { useState, useEffect } from "react";
import { auth } from "./firebase"; // Firebase yapılandırma dosyasını import edin
import { onAuthStateChanged, User } from "firebase/auth";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null); // Kullanıcı durumunu User veya null olarak ayarlayın
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Burada user değeri User tipinde olacak
      console.log("User status changed:", user);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup için unsubscribe çağrısı
  }, []);

  return { user, loading };
};

export default useAuth;
