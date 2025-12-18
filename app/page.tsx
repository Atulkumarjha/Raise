"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <nav className="w-full border-b bg-ededed text-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold flex gap-2 items-center">
          <Image src="/main-logo.png" alt="Raise Logo" width={40} height={40} />
            Raise
          </Link>
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <Link href="/signup" className="hover:text-blue-600">
                Signup
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-blue-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-blue-600">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex">
          <Image
            src="/candle-graph-1.png"
            alt="candle-graph-1"
            width={200}
            height={200}
          />
          <Image
            src="/candle-graph-2.jpeg"
            alt="candle-graph-2"
            width={200}
            height={200}
          />
          <Image
            src="/candle-graph-3.png"
            alt="candle-graph-3"
            width={200}
            height={200}
          />
        </div>
      </div>
    </>
  );
}
