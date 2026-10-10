"use client"

import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Logout = () => {
  const router = useRouter();
  const handleSignOut = async () => {

    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
          toast.success("Logged out successfully");

        },
      },
    });
  }
  return (
    <Button variant="ghost" onClick={handleSignOut} className="text-[12px] text-cPrimary cursor-pointer flex items-center"><ArrowRightFromSquare/> সাইন আউট</Button>
  )
}
export default Logout