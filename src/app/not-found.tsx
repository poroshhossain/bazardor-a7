import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] bg-bgColor flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center">

        {/* 404 */}
        <div className="relative">
          <p className="text-[120px] sm:text-[160px] leading-none font-extrabold text-cPrimary/10">
            404
          </p>

          <p className="absolute inset-0 flex items-center justify-center text-6xl sm:text-8xl font-extrabold text-cPrimary">
            404
          </p>
        </div>

        {/* Content */}
        <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-cForeground">
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mt-3 max-w-md mx-auto text-sm sm:text-base leading-7 text-cForeground/65">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
          URL ঠিক আছে কিনা যাচাই করুন অথবা হোম পেজে ফিরে যান।
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-7 inline-flex items-center justify-center rounded-lg bg-cPrimary px-7 py-3 text-sm font-semibold text-cLight shadow-sm transition hover:bg-cPrimary/90"
        >
          হোমে ফিরে যান
        </Link>

      </div>
    </main>
  );
};

export default NotFound;