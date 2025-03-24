import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function MaxWidthWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(" max-w-screen-2xl px-4 py-12 m-auto", className )}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
