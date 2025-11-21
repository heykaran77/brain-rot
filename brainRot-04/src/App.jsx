import Form from "./components/Form";

const App = () => {
  return (
    <div className="relative isolate flex min-h-screen items-center py-10">
      <Pattern />
      <Form />
    </div>
  );
};

export default App;

const Pattern = () => (
  <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(315deg,var(--color-neutral-200)_0,var(--color-neutral-200)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px]"></div>
);
