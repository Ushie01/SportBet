type Props = {
    children: React.ReactNode;
    bgColor: string;
};
const Container = ({ children, bgColor }: Props) => (
	<div className={`px-44 ${bgColor}`}>{children}</div>
);

export default Container;
