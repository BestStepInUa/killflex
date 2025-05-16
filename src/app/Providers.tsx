'use client';

import { domAnimation, LazyMotion } from "motion/react";
import { PropsWithChildren } from "react";

export function Providers({children}: PropsWithChildren<unknown>) {
  return <LazyMotion features={domAnimation}>
        {children}
    </LazyMotion>
}