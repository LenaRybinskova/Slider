import { ComponentPropsWithoutRef, ElementType } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  as?: ElementType;
}

export const Button = ({ as: Component = "button", className, ...rest }: ButtonProps) => {
  return <Component {...rest} className={`px-4 py-2 rounded-sm bg-primary text-border text-s ${className}`} />;
};
