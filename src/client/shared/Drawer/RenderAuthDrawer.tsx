import MobileAuthDrawer from "./MobileAuthDrawer";

export const renderAuthDrawer = (
	label: string,
      isOpen: boolean,
      className: string,
	setIsOpen: (value: boolean) => void,
	handleClick: Function,
	content: React.ReactNode
) => (
	<MobileAuthDrawer
		isOpen={isOpen}
		setIsOpen={setIsOpen}
		button={
			<button
				className={className}
				onClick={() => handleClick()}>
				{label}
			</button>
		}
		content={content}
	/>
);
