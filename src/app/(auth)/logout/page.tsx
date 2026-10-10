"use client"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LogOutPage = () => {
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
    <p onClick={handleSignOut} className="text-[12px] text-cPrimary cursor-pointer">log Out</p>
  )
}
export default LogOutPage