export function DropdownMenu({ children }) {
  return <div className="relative inline-block">{children}</div>;
}

export function DropdownMenuTrigger({ children }) {
  return children;
}

export function DropdownMenuContent({ children }) {
  return (
    <div className="absolute mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, ...props }) {
  return <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" {...props}>{children}</div>;
}
