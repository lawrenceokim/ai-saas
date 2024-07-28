import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>

      <div className="w-full flex justify-end">
        <UserButton />
      </div>
    </div>
  );
}

export default Navbar;
