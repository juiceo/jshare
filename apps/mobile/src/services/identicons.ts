import Identicon from 'identicon.js';
import md5 from 'md5';

export const generateIdenticon = (input: string, seed?: string) => {
    const hash = md5(`${input}${seed ?? ''}`);
    const data = new Identicon(hash, {
        size: 128,
        format: 'svg',
    }).toString();

    return `data:image/svg+xml;base64,${data}`;
};
