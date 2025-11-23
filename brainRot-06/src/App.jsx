import React from "react";

const App = () => {
  return (
    <div className="mx-auto py-20 max-w-4xl px-8 h-screen">
      <Header />
      <div className="grid grid-cols-4 gap-2 my-10 border border-neutral-300 p-1 rounded-3xl">
        <Column className="flex flex-col gap-1">
          <Card
            src="./01.png"
            alt="Evergreen — Marketing Landing"
            href="https://www.behance.net"
            className="rounded-tl-[calc(24px-4px)]"
          />
          <Card
            src="./03.png"
            alt="Aero — Dashboard UI"
            href="https://dribbble.com"
            className="grow"
          />
          <Card
            src="./10.png"
            alt="Lumen — Photographer Portfolio"
            href="https://www.janedoe.design"
            className="rounded-bl-[calc(24px-4px)]"
          />
        </Column>
        <Column className="flex flex-col gap-1">
          <Card
            src="./04.png"
            alt="Pulse — Mobile App Concept"
            href="https://dribbble.com"
          />
          <Card
            src="./11.png"
            alt="Atlas — SaaS Landing"
            href="https://www.producthunt.com"
          />
          <Card
            src="./05.png"
            alt="Solstice — E‑commerce UI"
            href="https://www.behance.net"
            className="grow"
          />
        </Column>
        <Column className="flex flex-col gap-1">
          <Card
            src="./02.png"
            alt="Nimbus — Weather App"
            href="https://github.com"
          />
          <Card
            src="./06.png"
            alt="Relay — Messaging UX case study"
            href="https://medium.com"
          />
          <Card
            src="./08.png"
            alt="Orbit — Analytics Dashboard"
            href="https://vercel.com"
          />
        </Column>
        <Column className="flex flex-col gap-1">
          <Card
            className="rounded-tr-[calc(24px-4px)]"
            src="./09.png"
            alt="Nest — Real Estate Listing UI"
            href="https://www.airbnb.com"
          />
          <Card
            src="./07.png"
            alt="Pulse Shop — Product Page"
            href="https://tailwindcomponents.com"
          />
          <Card
            src="./12.png"
            alt="Horizon — Blog Theme"
            href="https://wordpress.org"
            className="rounded-br-[calc(24px-4px)]"
          />
        </Column>
      </div>
    </div>
  );
};

export default App;

const Column = ({ children, className }) => (
  <div className={`${className}`}>{children}</div>
);

const Card = ({ src, alt, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`${className} card rounded-md group overlay`}>
      <img
        src={src}
        height={500}
        width={500}
        className="w-full h-full object-cover bg-center"
        alt={alt}
      />
      <p className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 text-white inset-0 font-medium flex items-center justify-center text-xs z-20 tracking-tight">
        {href.split("https://" || "https://www.")[1]}
      </p>
    </a>
  );
  return;
};

const Header = () => {
  return (
    <>
      <h2 className="font-bold text-3xl tracking-tighter text-center">
        Design That Works Harder Than Your{" "}
        <span className="relative after:-skew-4 after:absolute after:content-[''] after:inset-0 after:bg-green-400 after:-z-10">
          Competition.
        </span>
      </h2>
      <p className="tracking-tight font-medium mt-1 text-sm text-gray-300 text-center">
        We combine visual precision with modern engineering to deliver websites
        that are fast, responsive, and unmistakably premium. Your brand gets a
        digital presence built to stand out.
      </p>
    </>
  );
};
