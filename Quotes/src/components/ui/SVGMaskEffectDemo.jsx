"use client";
import { MaskContainer } from "../../components/ui/SvgMaskEffect";

export function SVGMaskEffectDemo() {
  return (
    <div
      className="flex h-full w-full items-center justify-center overflow-hidden ">
      <MaskContainer
        revealText={
  <p
    className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
    The magic you are looking for is in the work you are avoiding.
  </p>
}
className="h-full rounded-md border w-full text-white dark:text-black">
To get something you never had you have to {" "}
<span className="text-blue-500"> do </span> 
something you never did.

      </MaskContainer>
    </div>
  );
}
