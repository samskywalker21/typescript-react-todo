import { ThemeProvider } from "../components/theme-provider";

interface wrapperProps {
	children?: React.ReactNode;
}

const Wrapper = ({ children }: wrapperProps) => {
	return (
		<div className="flex h-dvh min-w-full">
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				{children}
			</ThemeProvider>
		</div>
	);
};

export default Wrapper;
