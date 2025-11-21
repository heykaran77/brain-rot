import React from "react";

const Form = () => {
  return (
    <form className="h-full w-full rounded-lg bg-neutral-200/50 px-8 py-10">
      <h2 className="bg-linear-to-b from-neutral-700 to-neutral-400 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent">
        This is an{" "}
        <span className="relative z-10 inline-block text-white after:absolute after:inset-0 after:-z-10 after:h-full after:w-full after:-skew-4 after:bg-red-500 after:content-['']">
          awesome
        </span>{" "}
        form
      </h2>
      <div className="mx-auto my-12 flex max-w-md flex-col gap-6">
        <Group>
          <Label htmlFor="name">First Name</Label>
          <Input id="name" type="text" placeholder="enter your name" />
        </Group>
        <Group>
          <Label
            htmlFor="email"
            className="after:ml-0.5 after:text-red-400 after:content-['*']"
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="enter your email"
            className="invalid:border-red-500 invalid:focus:ring-0"
          />
        </Group>
        <Group>
          <Label
            htmlFor="message"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Message
          </Label>
          <Input id="message" placeholder="enter your message" />
        </Group>
        <button
          onClick={(e) => e.preventDefault()}
          className="cursor-pointer rounded-lg bg-neutral-900 px-4 py-2 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 active:scale-95"
        >
          Submit form
        </button>
      </div>
    </form>
  );
};

export default Form;

const Group = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col gap-2 rounded-md p-2 has-invalid:bg-red-100 ${className}`}
    >
      {children}
    </div>
  );
};

const Label = ({ children, className, ...props }) => {
  return (
    <label {...props} className={`${className} font-medium text-neutral-800`}>
      {children}
    </label>
  );
};

const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`${className} rounded-md border border-neutral-300 px-4 py-2 transition-all duration-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
    />
  );
};
