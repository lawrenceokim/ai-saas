import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

function Navbar() {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />

      <div className="w-full flex justify-end">
        <UserButton />
      </div>
    </div>
  );
}

export default Navbar;
