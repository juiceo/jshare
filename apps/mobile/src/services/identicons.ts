import Identicon from 'identicon.js';
import md5 from 'md5';

export const generateIdenticon = (input: string, seed?: string) => {
    const hash = md5(`${input}${seed ?? ''}`);
    const data = new Identicon(hash, {
        background: [0, 0, 0, 255],
        size: 128,
        format: 'png',
    }).toString();

    return `data:image/png;base64,${data}`;
};
