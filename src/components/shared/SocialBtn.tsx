import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const SocialBtn = () => {
    return (
        <>
            <Button className="w-full" variant="ghost">
                <Icon icon="devicon:google" />
                Sign in with Google
            </Button>
            <Button className="w-full" variant="ghost">
                <Icon icon="mdi:github" />
                Sign in with GitHub
            </Button>
        </>
    )
}
export default SocialBtn