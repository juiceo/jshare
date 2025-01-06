import { useLocalSearchParams } from 'expo-router';

export const useGroupId = () => {
    const { groupId } = useLocalSearchParams<{ groupId: string }>();
    if (!groupId) {
        throw new Error(`Cannot use useGroupId hook outside of a group route`);
    }
    return groupId;
};
