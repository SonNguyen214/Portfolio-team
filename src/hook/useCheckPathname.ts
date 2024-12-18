"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const useCheckPathname = ({ idCategory }: { idCategory: string }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/product-detail")) {
      window.location.href = `/${idCategory}`;
    }
  }, [pathname]);
};
