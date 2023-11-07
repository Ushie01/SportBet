type Props = {
    children: React.ReactNode;
    bgColor: string;
};
const Container = ({ children, bgColor }: Props) => (
	<div className={`px-48 ${bgColor} h-max`}>{children}</div>
);

export default Container;
