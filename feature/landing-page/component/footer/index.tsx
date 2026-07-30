import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "./svg/index";

import Logo from "@/public/images/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-10 text-[#172554] md:px-16 md:pt-14">
      <div className="mx-auto max-w-7xl">
        {/* Top section */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Logo + Socials */}
          <div>
            <Link href="#home" className="inline-block">
              <Image
                src={Logo}
                alt="Accredian"
                width={145}
                height={50}
                className="h-auto w-[145px]"
              />
            </Link>

            {/* Social icons */}
            <div className="mt-3 flex items-center gap-5">
     
              <Link
                href="https://facebook.com/accredianlearn"
                aria-label="Facebook"
                className="transition h-6 w-6 fill-gray-700 hover:text-primary hover:fill-primary"
              >
                <Facebook
                  className="h-5 w-5 fill-current"
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href="https://www.linkedin.com/company/accredianedu/"
                aria-label="LinkedIn"
                  className="transition h-6 w-6 fill-gray-700 hover:text-primary hover:fill-primary"
              >
                <Linkedin
                  className="h-5 w-5 fill-current"
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href="https://twitter.com/accredianedu"
                aria-label="Twitter"
                  className="transition h-6 w-6 fill-gray-700 hover:text-primary hover:fill-primary"
              >
                <Twitter
                  className="h-5 w-5 fill-current"
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href="https://www.instagram.com/accredian_edu"
                aria-label="Instagram"
                  className="transition h-6 w-6 fill-gray-700 hover:text-primary hover:fill-primary"
              >
                <Instagram
                  className="h-5 w-5"
                  strokeWidth={2}
                />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA"
                aria-label="YouTube"
                  className="transition h-6 w-6 fill-gray-700 hover:text-primary hover:fill-primary"
              >
                <Youtube
                  className="h-5 w-5 fill-current"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="md:text-right">
            <Link
              href="#enquire"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Enquire Now
            </Link>

            <p className="mt-2 text-sm text-[#172554]">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-7 border-t border-[#172554]/70" />

        {/* Middle */}
        <div className="grid grid-cols-1 gap-8 py-7 md:grid-cols-2">
          {/* Accredian */}
          <div>
            <h3 className="text-lg font-bold text-black">
              Accredian
            </h3>

            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="#"
                className="w-fit text-base transition hover:text-primary"
              >
                About
              </Link>

              <Link
                href="#"
                className="w-fit text-base transition hover:text-primary"
              >
                Blog
              </Link>

              <Link
                href="#edge"
                className="w-fit text-base transition hover:text-primary"
              >
                Why Accredian
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-black">
              Contact Us
            </h3>

            <div className="mt-3 space-y-2 text-base">
              <p>
                Email us:{" "}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-primary hover:underline"
                >
                  enterprise@accredian.com
                </a>
              </p>

              <p className="max-w-2xl leading-6">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
                Sector 18,
                <br className="hidden md:block" />
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-[#172554]/70" />

        {/* Copyright */}
        <div className="py-4 text-center">
          <p className="text-sm text-[#172554]"> 
            © {new Date().getFullYear()} Accredian A Brand of FullStack
            Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}