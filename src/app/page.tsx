import ModeToggle from "@/components/ModeToggle";
import { ModeDropdown } from "@/components/ModeDropdown";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className='m-4'>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button>Sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Button variant={"secondary"}> Click me </Button>
      <ModeToggle />
      {/* <ModeDropdown /> */}
    </div>
  );
}
