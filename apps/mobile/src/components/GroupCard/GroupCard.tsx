import { LinearGradient } from 'expo-linear-gradient';

import type { Group } from '@jshare/prisma';

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
            bg="background.elevation2"
            br="xl"
            style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden' }}
        >
            <Stack absoluteFill style={{ opacity: 0.8 }}>
                <Image
                    source={{ uri: 'https://picsum.photos/id/10/400/300' }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Stack>

            <LinearGradient
                colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, paddingBottom: 30 }}
            >
                <Stack p="xl" row justifyBetween>
                    <Typography variant="h4">2 days ago</Typography>
                    <Stack bg="background.elevation1" center br="xl" px="lg">
                        <Typography variant="h4" color="error.light">
                            You owe: 100$
                        </Typography>
                    </Stack>
                </Stack>
            </LinearGradient>

            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
                style={{ position: 'absolute', bottom: 0, left: 0, right: 0, paddingTop: 30 }}
            >
                <Stack p="xl" column alignStart>
                    <Typography variant="h3">{group.name}</Typography>
                    <Typography variant="body1">4 members</Typography>
                </Stack>
            </LinearGradient>
        </Stack>
    );
};
