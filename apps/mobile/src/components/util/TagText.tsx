import React from 'react';

import { UserName } from '~/components/UserName';

export type TagTextProps = {
    text: string;
};

const _TagText = (props: TagTextProps) => {
    const parts = parseAndReplaceTags(props.text);

    return parts.map((part, index) => {
        return <React.Fragment key={index}>{part}</React.Fragment>;
    });
};

export const TagText = React.memo(_TagText);

enum TagType {
    User = 'user',
}

type TagResolver = Record<TagType, (id: string) => React.ReactNode>;

const parseAndReplaceTags = (text: string): React.ReactNode[] => {
    // Regular expression to match the custom tag syntax
    const tagPattern = /@(\w+)=([\w-]+)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    // Process the text and find matches
    text.replace(tagPattern, (match, tagType, id, offset) => {
        if (offset > lastIndex) {
            parts.push(text.slice(lastIndex, offset));
        }

        const resolvers: TagResolver = {
            user: (id) => <UserName userId={id} variant="short" />,
        };
        const resolver = resolvers[tagType as TagType];
        if (resolver) {
            parts.push(resolver(id));
        } else {
            parts.push(match);
        }

        lastIndex = offset + match.length;
        return match;
    });

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
};
