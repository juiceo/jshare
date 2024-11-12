import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import type { Group } from '@jshare/prisma';

import { Icon } from '~/components/atoms/Icon';
import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';

export type GroupCardProps = {
    group: Group;
};

export const GroupCard = (props: GroupCardProps) => {
    const { group } = props;

    return (
        <Stack
            br="xl"
            bg="background.elevation1"
            column
            alignStretch
            style={{ overflow: 'hidden' }}
        >
            <Stack style={{ position: 'relative' }}>
                <Image
                    height={140}
                    width={Dimensions.get('window').width}
                    source={{
                        id: group.imageId,
                    }}
                    fit="cover"
                    quality={80}
                />
                <LinearGradient
                    colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, paddingBottom: 50 }}
                >
                    <Stack p="xl" row justifyBetween alignCenter>
                        <Typography variant="caption">2 days ago</Typography>
                        <Stack
                            bg="background.elevation1"
                            row
                            center
                            spacing="sm"
                            br="xl"
                            px="lg"
                            py="sm"
                        >
                            <Icon
                                name="ArrowDownRight"
                                size={16}
                                color={(theme) => theme.palette.error.light}
                            />
                            <Typography variant="caption" color="error.light">
                                You owe: 100$
                            </Typography>
                        </Stack>
                    </Stack>
                </LinearGradient>
            </Stack>
            <Stack column p="xl" br="2xl" style={{ position: 'relative' }}>
                <Typography variant="h4">{group.name}</Typography>
                <Typography variant="caption" color="secondary">
                    $0.00 | 29 members
                </Typography>
            </Stack>
        </Stack>
    );
};
