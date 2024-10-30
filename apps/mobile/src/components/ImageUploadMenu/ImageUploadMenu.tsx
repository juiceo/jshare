import { Menu } from '~/components/atoms/Menu';

export type ImageUploadMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (value: 'library' | 'camera' | 'remove') => void;
    canRemove?: boolean;
};

export const ImageUploadMenu = (props: ImageUploadMenuProps) => {
    const { isOpen, onClose, canRemove, onSelect } = props;

    return (
        <Menu
            isOpen={isOpen}
            onClose={() => onClose()}
            options={[
                {
                    id: 'library',
                    label: 'Upload from Library',
                    icon: 'Camera',
                },
                {
                    id: 'camera',
                    label: 'Upload from Camera',
                    icon: 'Images',
                },
                {
                    id: 'remove',
                    label: 'Remove image',
                    icon: 'X',
                    hidden: !canRemove,
                },
            ]}
            onChange={(value) => {
                onSelect(value);
            }}
        />
    );
};
