import Link from "next/link";
import React from "react";

const Rendering = () => {
  return (
    <div>
      <Link
        href={"/csr"}
        className="mx-1
      "
      >
        CSR
      </Link>
      <Link
        href={"/isr"}
        className="mx-1
      "
      >
        ISR
      </Link>
      <Link
        href={"/ssg"}
        className="mx-1
      "
      >
        SSG
      </Link>
      <Link
        href={"/ssr"}
        className="mx-1
      "
      >
        SSR
      </Link>
    </div>
  );
};

export default Rendering;
