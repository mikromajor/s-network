import ModeToggle from "@/components/ModeToggle";
import { ModeDropdown } from "@/components/ModeDropdown";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  return <div className='m-4'>Home page</div>;
}
