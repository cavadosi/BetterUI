import React from "react";
import { twMerge } from "tailwind-merge";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
      className={twMerge("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ", className)}
        // className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-red-500"
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export {Container};
