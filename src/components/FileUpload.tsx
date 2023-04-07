import { ReactNode, useRef } from 'react';

import { InputGroup } from '@chakra-ui/react';

type FileUploadProps = {
	accept?: string;
	children?: ReactNode;
	disabled?: boolean;
	onFileSelected: (file: File, name: string) => void;
};

const FileUpload = (props: FileUploadProps) => {
	const { accept, children, disabled, onFileSelected } = props;
	const inputRef = useRef<HTMLInputElement | null>(null);
	const handleClick = () => (!disabled ? inputRef.current?.click() : {});

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files && !!files[0]) {
			const file = files[0];
			onFileSelected(file, file.name.replace(/\.[^/.]+$/, ''));
		}
	};

	return (
		<InputGroup onClick={handleClick}>
			<input
				type={'file'}
				multiple={false}
				hidden
				accept={accept}
				ref={inputRef}
				onChange={handleFileSelect}
				disabled={disabled}
			/>
			<>{children}</>
		</InputGroup>
	);
};

export default FileUpload;
