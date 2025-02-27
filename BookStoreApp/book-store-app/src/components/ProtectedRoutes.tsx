import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "@/services/useAuth"; // useAuth hook'unu içe aktarın

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
