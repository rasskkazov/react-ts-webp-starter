import { useState } from "react";
import Skeleton from "./Skeleton";

export const useSkeleton = () => {
  const [isLoading, setIsLoading] = useState(true);
  return { isLoading, setIsLoading, Skeleton };
};
