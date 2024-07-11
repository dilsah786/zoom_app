import { SignUp } from "@clerk/nextjs";
import React from "react";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp  />
    </main>
  );
};

export default SignUpPage;
