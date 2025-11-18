import { TfiEmail } from "react-icons/tfi";

const Hero = () => {
  return (
    <div className="relative my-24 flex w-full flex-col items-center justify-center space-y-4">
      <div className="absolute top-10 left-60 -z-10 h-1/2 w-1/2 rounded-full bg-amber-500/20 blur-3xl max-sm:hidden"></div>
      <h1 className="max-w-2xl bg-linear-to-br from-amber-100 to-amber-500 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-7xl">
        Unleash the power of intuitive finance.
      </h1>
      <p className="max-w-2xl text-center text-sm text-neutral-300 selection:bg-white selection:text-neutral-600 md:text-xl">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>

      <div className="mt-4 flex w-full max-w-xl flex-wrap justify-center gap-2">
        <div className="group flex flex-1 items-center gap-4 rounded-lg border border-neutral-700 px-4 text-white placeholder:text-neutral-600">
          <TfiEmail className="text-neutral-600" />
          <input
            placeholder="Enter your email"
            type="text"
            className="w-full focus:outline-none"
          />
        </div>
        <button className="relative cursor-pointer overflow-hidden rounded-lg border border-neutral-700 px-4 py-2 text-sm text-white hover:ring-1 hover:ring-neutral-300 focus:ring-1 focus:ring-amber-500">
          <div className="absolute inset-x-0 -bottom-px h-0.5 bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;
