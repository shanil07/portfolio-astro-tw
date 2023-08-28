import type { ReactNode } from "react";
import classnames from "classnames";
type Props = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  id?: string;
};

const Button = ({
  children,
  className,
  variant = "primary",
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={classnames(
        "rounded-md px-4 py-2 flex cursor-pointer",
        variant === "primary" && "bg-primary text-inverse",
        variant === "secondary" && "bg-primary text-inverse",
        variant === "outline" &&
          "bg-transparent border-2 border-primary hover:shadow-lg hover:bg-primary hover:text-inverse",
        className
      )}
    >
      {children}
    </button>
  );
};

export { Button };
