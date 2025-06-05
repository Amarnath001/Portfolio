import { ButtonHTMLAttributes } from "react";

export function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded-2xl font-semibold shadow-md bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
