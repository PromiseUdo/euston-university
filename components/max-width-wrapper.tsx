import clsx from "clsx";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full relative max-w-screen-xl px-2.5 md:px-4 lg:px-[20px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
