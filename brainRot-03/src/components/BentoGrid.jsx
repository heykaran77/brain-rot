import { BsGithub, BsGrid, BsTwitterX } from "react-icons/bs";

const BentoGrid = () => {
  return (
    <div className="max-w-4xl mx-auto minh-screen py-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Card className="md:border-r md:border-b border-neutral-200">
          <CardHeader>
            <BsGithub className="size-6 text-neutral-600" />
            <CardTitle>
              {
                [
                  "Tiny Bento",
                  "Snack Grid",
                  "Mind Morsel",
                  "Pocket Stack",
                  "Mini Bento",
                ][Math.floor(Math.random() * 5)]
              }
            </CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton></CardSkeleton>
        </Card>
        <Card className="md:border-b border-neutral-200">
          <CardHeader>
            <BsGrid className="size-6 text-neutral-600" />
            <CardTitle>
              {
                [
                  "Quick Nibble",
                  "Byte Basket",
                  "Data Snack",
                  "Info Munch",
                  "Snack Pack",
                ][Math.floor(Math.random() * 5)]
              }
            </CardTitle>
          </CardHeader>
          <CardDescription>
            Analyze user interactions with comprehensive insights and metrics.
            Analyze. Build. Conquer.
          </CardDescription>
          <CardSkeleton></CardSkeleton>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <BsTwitterX className="size-6 text-neutral-600" />
            <CardTitle>
              {
                [
                  "Data Delight",
                  "Snack Attack",
                  "Info Byte",
                  "Mini Munch",
                  "Quick Snack",
                ][Math.floor(Math.random() * 5)]
              }
            </CardTitle>
          </CardHeader>
          <CardDescription>
            Visualize trends and patterns in user behavior for better
            decision-making. Track real-time activity of agents with detailed
            records of triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton></CardSkeleton>
        </Card>
      </div>
    </div>
  );
};

export default BentoGrid;

const CardSkeleton = ({ children, className }) => {
  return (
    <div
      className={`h-60 bg-neutral-100 shadow-md w-full my-4 rounded-lg overflow-hidden bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] bg-size-[10px_10px] ${className}`}>
      {children}
    </div>
  );
};

const Card = ({ children, className }) => {
  return <div className={`w-full p-4 ${className}`}>{children}</div>;
};

const CardHeader = ({ children, className }) => {
  return <div className={`flex items-center gap-2`}>{children}</div>;
};

const CardTitle = ({ children, className }) => {
  return (
    <h2
      className={`text-neutral-600 font-medium tracking-tight text-lg ${className}`}>
      {children}
    </h2>
  );
};

const CardDescription = ({ children, className }) => {
  return (
    <p className={`text-neutral-400 mt-2 text-sm ${className}`}>{children}</p>
  );
};
