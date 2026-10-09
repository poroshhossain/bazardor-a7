import { Button } from "@heroui/react"
import CurrentDate from "../shared/CurrentDate"
import Image from "next/image"


const Hero = () => {
    const heroItems = {
        title: 'আজকের বাজারের দাম এক নজরে',
        des: 'চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।',
        btn: 'সব পণ্য দেখুন',
        date: true,
        image: '/bazar-hero.png'

    }

    return (
        <section>
            <div className="mx-auto my-4 grid max-w-7xl grid-cols-1 gap-5 overflow-hidden rounded-2xl bg-cLight px-4 py-4 sm:px-6 sm:py-6 md:grid-cols-2 md:items-center md:gap-8 lg:gap-10 lg:px-8">
                {/* Hero Content */}
                <div className="min-w-0 py-2">
                    {heroItems.date && (
                        <h5 className="mb-2 inline-block rounded-full bg-cPrimary/15 px-3 py-1 text-xs font-semibold text-cPrimary">
                            <CurrentDate />
                        </h5>
                    )}

                    <h1 className="break-words leading-none pb-3 pt-1 text-2xl font-bold text-cForeground sm:text-3xl lg:text-4xl xl:text-5xl">
                        {heroItems.title}
                    </h1>

                    <p className="pb-5 text-sm leading-3 text-cForeground/70 sm:text-base sm:leading-5">
                        {heroItems.des}
                    </p>

                    <Button className="rounded-[10px] bg-cPrimary text-cLight transition-colors hover:bg-cPrimary/90">
                        {heroItems.btn}
                    </Button>
                </div>

                {/* Hero Image */}
                <div className="relative h-56 w-full overflow-hidden rounded-xl sm:h-72 md:h-80 lg:h-96">
                    <Image
                        src={heroItems.image}
                        alt={heroItems.title}
                        fill
                        priority
                        sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1279px) 50vw, 576px"
                        className="object-cover"
                    />
                </div>
            </div>

        </section>
    )
}
export default Hero