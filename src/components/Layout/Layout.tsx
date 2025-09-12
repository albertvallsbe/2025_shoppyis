import type { ReactNode } from "react";

type LayoutProps = { children: ReactNode };

export const Layout = ({ children }: LayoutProps) => {
	return <div className="flex flex-col items-center mt-20">{children}</div>;
};
