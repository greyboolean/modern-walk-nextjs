import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <main className="mx-16 my-12">
      {children}
    </main>
  );
}

export default Main;
