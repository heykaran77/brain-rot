import BentoGrid from "./components/BentoGrid";
import Theme from "./components/Theme";

const App = () => {
  return (
    <div className="relative bg-background min-h-screen isolate">
      <Pattern />
      <Theme />
      <BentoGrid />
    </div>
  );
};

export default App;

const Pattern = () => (
  <div className="absolute inset-0 -z-10 bg-size-[10px_10px] bg-[repeating-linear-gradient(315deg,var(--color-neutral-100)_0,var(--color-neutral-100)_1px,transparent_1px,transparent_50%)] dark:bg-[repeating-linear-gradient(315deg,var(--color-neutral-900)_0,var(--color-neutral-900)_1px,transparent_1px,transparent_50%)]"></div>
);
