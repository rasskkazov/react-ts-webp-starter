import { lazy } from "react";

export const LazyHeavyWidget = lazy(() => import("./HeavyWidget"));
