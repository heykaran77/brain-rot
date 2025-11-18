import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="relative isolate flex min-h-screen flex-col items-center bg-neutral-900 px-8">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(51, 51, 51, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(51, 51, 51, 0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        {/* <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(51,51,51,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div> */}
      </div>
      <NavBar />
      <Hero />
    </div>
  );
};

export default App;
