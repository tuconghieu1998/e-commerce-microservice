import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bell, ShoppingCart, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";
import ProfileButton from "./ProfileButton";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
            <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="Shopping" width={36} height={36} className="w-6 h-6 md:w-9 md:h-9"></Image>
                <p className="text-md font-medium tracking-wider"> SHOPPING</p>
            </Link>

            <div className="flex items-center gap-6">
                <SearchBar />
                <Link href="/">
                    <Home className="w-4 h-4 text-gray-600"></Home>
                </Link>
                <Bell className="w-4 h-4 text-gray-600"></Bell>
                <ShoppingCartIcon></ShoppingCartIcon>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <ProfileButton />
                </SignedIn>
            </div>
        </nav>
    );
}

export default Navbar;
