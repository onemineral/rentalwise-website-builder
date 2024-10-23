'use client';

import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { useVirtualizer } from '@tanstack/react-virtual';
import FontCard from '@/components/FontShowcase/FontCard';

export interface FontData {
    variants: {
        [key: string]: number;
    };
    isVariable: boolean;
    styles: string[];
    weights: number[];
    familyName: string;
    category: string;
}

export interface FontsResponse {
    [key: string]: FontData;
}

export const buildUrl = (fontId: string) => {
    return `https://fonts.bunny.net/css?family=${encodeURIComponent(fontId)}&display=fallback`;
};

export const getFontIdFromUrl = (url: string) => {
    const urlObj = new URL(url);

    return urlObj.searchParams.get('family') || undefined;
};

export default function FontShowcase({
    value,
    onChange,
    fonts,
    loading,
    error,
}: {
    value?: string;
    onChange?: (value: string) => void;
    fonts?: [string, FontData][];
    loading?: boolean;
    error?: string | null;
}) {
    const [filteredFonts, setFilteredFonts] = useState<
        [string, FontData][] | undefined
    >([]);
    const [searchTerm, setSearchTerm] = useState('');

    const [localValue, setLocalValue] = useState(
        value ? getFontIdFromUrl(value) : undefined,
    );

    useEffect(() => {
        setLocalValue(value ? getFontIdFromUrl(value) : undefined);
    }, [value]);

    const parentRef = useRef<HTMLDivElement>(null);

    const virtualizer = useVirtualizer({
        count: filteredFonts?.length || 0,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 100,
        overscan: 5,
    });

    useEffect(() => {
        const filtered = (fonts || []).filter(([fontId, fontData]) => {
            return fontData.familyName
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        });
        setFilteredFonts(filtered);
    }, [fonts, searchTerm]);

    if (loading) {
        return <div className="text-center">Loading fonts...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (!filteredFonts) {
        return null;
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Font Showcase</h1>
            <div className="flex flex-wrap gap-4 mb-6">
                <Input
                    type="text"
                    placeholder="Search fonts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-grow"
                    aria-label="Search fonts"
                />
            </div>
            <div ref={parentRef} className="h-[600px] overflow-auto">
                <div
                    style={{
                        height: `${virtualizer.getTotalSize()}px`,
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    {virtualizer.getVirtualItems().map((virtualItem) => (
                        <div
                            key={virtualItem.key}
                            data-index={virtualItem.index}
                            ref={virtualizer.measureElement}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                transform: `translateY(${virtualItem.start}px)`,
                            }}
                        >
                            <FontCard
                                fontId={filteredFonts[virtualItem.index][0]}
                                fontData={filteredFonts[virtualItem.index][1]}
                                onSelect={() =>
                                    onChange?.(
                                        buildUrl(
                                            filteredFonts[virtualItem.index][0],
                                        ),
                                    )
                                }
                                selected={
                                    localValue ===
                                    filteredFonts[virtualItem.index][0]
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
