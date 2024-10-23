import React, { useEffect, useRef, useState } from 'react';
import { FontData } from '@/components/FontShowcase/FontShowcase';
import classnames from 'classnames';

function FontItem({
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

            const existingLink = document.querySelector(
                `link[href="${link.href}"]`,
            );

            if (!existingLink) {
                document.head.appendChild(link);
                linkRef.current = link;
            } else {
                linkRef.current = null;
            }
        }

        return () => {
            if (linkRef.current && document.head.contains(linkRef.current)) {
                document.head.removeChild(linkRef.current);
                linkRef.current = null;
            }
        };
    }, []);

    return (
        <div
            className={classnames(
                'mb-4 overflow-hidden p-2 transition-colors duration-300 hover:bg-slate-100 cursor-pointer',
                {
                    'bg-slate-200': selected,
                },
            )}
            onClick={() => onSelect?.(fontId)}
        >
            <h3 className="text-sm font-semibold">{fontData.familyName}</h3>
            <p className="text-xs" style={{ fontFamily: fontData.familyName }}>
                The quick brown fox jumps over the lazy dog
            </p>
        </div>
    );
}

export default FontItem;
