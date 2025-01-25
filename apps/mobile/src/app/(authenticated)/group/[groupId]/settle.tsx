import React from 'react';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/settle',
    },
    ({ params }) => {
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        const [balances] = trpc.balances.getByParticipantInGroup.useSuspenseQuery({
            groupId: params.groupId,
        });

        return (
            <Screen>
                <Screen.Header title={group.name} subtitle="Settle up" blur />
                <Screen.Content scrollable disableHeaderOffset>
                    <Stack column center alignCenter ar="1/1" p="2xl">
                        <Typography variant="overline">Settle up</Typography>
                    </Stack>
                </Screen.Content>
                <Screen.Footer>
                    <Button color="primary">Mark 2/2 as paid</Button>
                </Screen.Footer>
            </Screen>
        );
    }
);
