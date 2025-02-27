import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const showNavbar = path !== "/login" && path !== "/register";

  return (
    <>
      <div>
        {showNavbar && <Navbar />}
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
