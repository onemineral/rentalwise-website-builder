import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FontData } from '@/components/FontShowcase/FontShowcase';
import classnames from 'classnames';

function FontCard({
    fontId,
    fontData,
    selected,
    onSelect,
}: {
    fontId: string;
    fontData: FontData;
    onSelect?: (fontId: string) => void;
    selected?: boolean;
}) {
    const linkRef = useRef<HTMLLinkElement | null>(null);

    useEffect(() => {
        if (!linkRef.current) {
            const link = document.createElement('link');
            link.href = `https://fonts.bunny.net/css?family=${encodeURIComponent(fontId)}&display=fallback`;
            link.rel = 'stylesheet';
            link.setAttribute('loading', 'lazy');
            document.head.appendChild(link);
            linkRef.current = link;
        }

        return () => {
            if (linkRef.current && document.head.contains(linkRef.current)) {
                document.head.removeChild(linkRef.current);
                linkRef.current = null;
            }
        };
    }, []);

    return (
        <Card
            className={classnames(
                'mb-4 overflow-hidden transition-colors duration-300 hover:border-primary cursor-pointer',
                {
                    'border-primary': selected,
                },
            )}
            onClick={() => onSelect?.(fontId)}
        >
            <CardContent className="p-2">
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                        <h3 className="text-sm font-semibold">
                            {fontData.familyName}
                        </h3>
                    </div>
                </div>
                <p
                    className="text-xs"
                    style={{ fontFamily: fontData.familyName }}
                >
                    The quick brown fox jumps over the lazy dog
                </p>
            </CardContent>
        </Card>
    );
}

export default FontCard;
