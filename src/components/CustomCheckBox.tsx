import { IconButton } from '@chakra-ui/react';
import { RiCheckLine } from 'react-icons/ri';

interface Props {
	checked: boolean;
	onChange: (enabled: boolean) => void;
}

const CustomCheckBox = (props: Props) => {
	const { checked, onChange } = props;
	return (
		<IconButton
			aria-label="Toggle"
			onClick={() => onChange(!checked)}
			width="28px"
			height="28px"
			padding="0"
			minWidth="0"
			borderRadius="50px"
			background={checked ? 'green.500' : 'transparent'}
			display="flex"
			alignItems="center"
			justifyContent="center"
			borderWidth="3px"
			borderColor="green.500"
			colorScheme="green"
			_hover={{
				background: checked ? 'green.400' : 'transparent',
			}}
			_focus={{
				background: checked ? 'green.400' : 'transparent',
			}}
			sx={{
				transition: 'background-color 0.2s ease-in-out',
			}}
		>
			<RiCheckLine color={checked ? 'white' : 'transparent'} />
		</IconButton>
	);
};

export default CustomCheckBox;
