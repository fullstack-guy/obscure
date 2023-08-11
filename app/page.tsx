import Link from "next/link";
import Image from "next/image";

import LogoutButton from "@/components/LogoutButton";
import NavBar from "@/containers/NavBar";

import supabase from "./utils/supabase";
import logo from "@/app/assets/images/logo.png";
import MainTop from "@/containers/MainTop";

export default async function Index() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <nav className="w-full flex justify-between items-center h-16">
        <Link href="/" className="lg:flex gap-4 items-center hidden">
          <Image src={logo} alt="spyro logo" width={40} height={40} />
          <h2 className="uppercase text-black font-bold text-2xl">SPYRO</h2>
        </Link>
        <NavBar />
        <div className="p-3 text-sm text-foreground shrink-0">
          {user ? (
            <div className="flex items-center gap-4">
              Hey, {user.email}!
              <LogoutButton />
              <Link
                href="/update-password"
                className="py-3 px-10 no-underline bg-green-500 hover:bg-green-700 text-black text-center text-sm font-bold w-28"
              >
                Reset Password
              </Link>
            </div>
          ) : (
            <Link
              href="/login"
              className="py-3 px-10 no-underline bg-green-500 hover:bg-green-700 text-black text-center text-sm font-bold w-28"
            >
              Log In
            </Link>
          )}
        </div>
      </nav>
      <MainTop />
    </div>
  );
}
