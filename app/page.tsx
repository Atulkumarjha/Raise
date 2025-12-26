"use client";

import Link from "next/link";
import Image from "next/image";
import { HoverEffect } from "../components/ui/card-hover-effect";
import Footer from "../components/footer";

export default function HomePage() {
  const features = [
    {
      title: "Customer-first always",
      description:
        "That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.",
    },
    {
      title: "No spam or gimmicks",
      description:
        'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.',
    },
    {
      title: "The Raise universe",
      description:
        "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },
    {
      title: "Do better with money",
      description:
        "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];

  return (
    <>
      <nav
        className="rounded-2xl mx-[275px] mt-[10px] border-b text-black px- py-2"
        style={{ backgroundColor: "#202425" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold flex gap-2 items-center text-[#d0f1cf]"
          >
            <Image
              src="/main-logo.png"
              alt="Raise Logo"
              width={40}
              height={40}
            />
            Raise
          </Link>
          <ul className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
            <li>
              <Link
                href="/about"
                className="text-[#d0f1cf] hover:text-[#7fef65]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-[#d0f1cf] hover:text-[#7fef65]"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-[#d0f1cf] hover:text-[#7fef65]"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="text-[#d0f1cf] hover:text-[#7fef65]"
              >
                Support
              </Link>
            </li>
          </ul>
          <div className="flex gap-4">
            <Link href="/login" className="text-[#d0f1cf] hover:text-[#7fef65]">
              Login
            </Link>
            <Link
              href="/signup"
              className="text-[#d0f1cf] hover:text-[#7fef65]"
            >
              Signup
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center text-center mt-16">
        <div className="text-[#7fef65] text-3xl font-bold">
          Invest in everything
        </div>
        <div className="text-xl font-bold">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-25 bg-black">
        <div className="flex">
          <Image src="/1.avif" alt="candle-graph-1" width={750} height={750} />
        </div>
        <div className="mt-5">
          <button className="bg-[#7fef65] text-black w-25 font-bold rounded-2xl">
            Sign Up{" "}
          </button>
        </div>
      </div>
      <div>
        <HoverEffect items={features} />
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-16">
        <div className="text-[#7fef65] text-3xl font-bold">
          Open a account and Raise
        </div>
        <div className="text-xl font-bold">
          Modern platforms and apps, ₹0 investments, ₹0 intraday and F&O trades.
        </div>
      </div>
      <div><Footer /></div>
    </>
  );
}
