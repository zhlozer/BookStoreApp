import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import HeartIcon from "@/components/HeartIcon";
import Link from "next/link";
import ProfileIcon from "./ProfileIcon";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "@/services/firebase";

const Navbar = () => {
  const router = useRouter();
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    setFavoriteCount(storedIds.length);
  }, []);

  function handleClickLogo() {
    router.push("/home");
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-white p-4 flex items-center justify-between shadow-sm relative">
      <button onClick={handleClickLogo}>
        <div className="flex-shrink-0 ml-10">
          <Image src="/Logo.jpg" alt="Logo" width={60} height={39} />
        </div>
      </button>

      <div className="flex-1 flex justify-center mx-4">
        <div className="flex items-center bg-customPurple rounded-md px-4 py-2 max-w-500 w-full">
          <svg
            className="w-5 h-5 fill-gray-400 mr-3"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
          </svg>

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
          />
        </div>
      </div>

      <button className="m-2" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <ProfileIcon />
      </button>

      {dropdownOpen && (
        <div className="absolute right-10 mt-16 bg-white shadow-lg rounded-lg md z-10">
          <button
            onClick={handleLogout}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg w-full text-left"
          >
            Logout
          </button>
        </div>
      )}

      <div className="relative flex items-center">
        <Link href="/favorites">
          <HeartIcon isFilled={false} />
        </Link>

        {favoriteCount > 0 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {favoriteCount}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
