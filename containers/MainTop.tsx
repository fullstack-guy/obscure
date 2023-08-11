import Link from "next/link";

import SpyroCard from "@/components/SpyroCard";

const MainTop = () => {
  return (
    <div className="flex justify-between items-end pt-28">
      <div className="flex flex-col w-2/3 gap-8">
        <p className="tex-black font-['Manrope'] text-6xl font-extrabold leading-[130%]">
          Keep your bank transactions private with virtual bank accounts.
        </p>
        <p className="text-black/80 text-xl font-light leading-8 pr-52">
          Mask your bank account numbers, transaction information, and easily
          prevent unwanted charges with virtual bank accounts.
        </p>
        <Link
          href="/get-started"
          className="py-3 px-12 no-underline bg-green-500 hover:bg-green-700 text-black text-center text-sm font-bold w-60"
        >
          {`Get Started ->`}
        </Link>
      </div>
      <div className="w-1/3">
        <SpyroCard className="-ml-40 pl-40 -mb-20" />
      </div>
    </div>
  );
};

export default MainTop;
