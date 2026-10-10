"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

const SocialBtn = () => {

    const handleSignInGoogle = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: '/profile'
        });
        if (error) {
            toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি");
            return
        }
    }
    const handleSignInGitHub = async () => {
        const {error} = await authClient.signIn.social({
            provider: "github"
        })
        if (error) {
            toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি");
            return
        }
    }
    return (
        <>
            <Button className="w-full" variant="ghost" onPress={handleSignInGoogle}>
                <Icon icon="devicon:google" />
                Sign in with Google
            </Button>
            <Button onPress={handleSignInGitHub} className="w-full" variant="ghost">
                <Icon icon="mdi:github" />
                Sign in with GitHub
            </Button>
        </>
    )
}
export default SocialBtn