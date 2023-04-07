import React from 'react';

import { Card, IconButton, Image } from '@chakra-ui/react';
import { RiCloseLine } from 'react-icons/ri';

interface FileUploadImageProps {
	image: string;
	onRemove: () => void;
}

const FileUploadImage = (props: FileUploadImageProps) => {
	const { image, onRemove } = props;

	return (
		<Card background="white" borderRadius="lg" width="100%" sx={{ position: 'relative' }}>
			<IconButton
				variant="ghost"
				colorScheme="blackAlpha"
				aria-label={'Remove'}
				sx={{ position: 'absolute', top: 2, right: 2 }}
				onClick={(e) => {
					e.stopPropagation();
					onRemove();
				}}
			>
				<RiCloseLine />
			</IconButton>
			<Image src={image} width="100%" sx={{ aspectRatio: '16/9', objectFit: 'contain' }} />
		</Card>
	);
};

export default FileUploadImage;
