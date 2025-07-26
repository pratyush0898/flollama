import { PrimaryButton } from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <noscript>Page not found</noscript>
      <div className="notfound-wapper">
        <h1 className="h1 leading-[48px]"><span>{"404 - "}</span><span>{"Page Not Found"}</span></h1>
        <p className="body">The page you are looking for does not exist.</p>
        <Link href="/">
          <PrimaryButton>Go to Home</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
