import { db } from '~/services/instantdb';
import { useAuth } from '~/wrappers/AuthContext';

export function useProfile() {
    const auth = useAuth();
    const userId = auth.user?.id;
    const profileQuery = db.useQuery(
        userId
            ? {
                  profiles: {
                      $: {
                          where: {
                              userId,
                          },
                      },
                  },
              }
            : null
    );

    return {
        isLoading: profileQuery.isLoading,
        error: profileQuery.error,
        data: profileQuery.data?.profiles[0] ?? null,
    };
}
