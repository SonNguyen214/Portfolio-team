"use client";

import { useEffect, useState } from "react";

export const useDelayLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return { loading };
};
