import { useEffect, useState } from 'react';

import { generateIdenticon } from '~/services/identicons';

export const useIdenticon = (input: string | null, seed?: string) => {
    const [dataURI, setDataURI] = useState<string | null>(() => {
        return input ? generateIdenticon(input, seed) : null;
    });

    useEffect(() => {
        if (input) {
            setDataURI(generateIdenticon(input, seed));
        }
    }, [input, seed]);

    return dataURI;
};
