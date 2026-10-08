import HeaderAction from "./HeaderAction"

import MainLogo from "../shared/MainLogo"

const HeaderTop = () => {

    return (
        <div className="border-b border-b-shadoColor">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center md:justify-between py-4 ">
                    {/* Logo */}
                    <MainLogo />
                    {/* header Action */}
                    <div className="hidden md:flex">
                        <HeaderAction />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop