import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center h-screen bg-gradient-to-br  from-blue-700 to-teal-400 justify-center">
      <SignUp redirectUrl="/home" />
    </div>
  );
}
