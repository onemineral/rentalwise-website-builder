import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FontData } from '@/components/FontShowcase/FontShowcase';
import { Button } from '@/components/ui/button';
import classnames from 'classnames';

function FontCard({
    fontId,
    fontData,
    onSelect,
    selected,
}: {
    fontId: string;
    fontData: FontData;
    onSelect?: (fontId: string) => void;
    selected?: boolean;
}) {
    const [expanded, setExpanded] = useState(false);
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

    const toggleExpand = () => setExpanded(!expanded);

    const previewCount = fontData.styles.length * fontData.weights.length;

    return (
        <Card
            className={classnames(
                'mb-4 overflow-hidden transition-colors duration-300 hover:border-primary cursor-pointer',
                {
                    'border-primary': selected,
                },
            )}
            onClick={toggleExpand}
        >
            <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">
                            {fontData.familyName}
                        </h3>
                        <Badge variant="secondary">
                            {previewCount} previews
                        </Badge>
                    </div>
                    {expanded ? (
                        <ChevronUp size={20} />
                    ) : (
                        <ChevronDown size={20} />
                    )}
                </div>
                <p
                    className="text-lg"
                    style={{ fontFamily: fontData.familyName }}
                >
                    The quick brown fox jumps over the lazy dog
                </p>
                {expanded && (
                    <>
                        <div className="mt-4 space-y-2">
                            {fontData.styles.flatMap((style) =>
                                fontData.weights.map((weight) => (
                                    <p
                                        key={`${style}-${weight}`}
                                        style={{
                                            fontFamily: fontData.familyName,
                                            fontWeight: weight,
                                            fontStyle: style,
                                        }}
                                        className="text-sm"
                                    >
                                        {`${style} ${weight}: `}The quick brown
                                        fox jumps over the lazy dog
                                    </p>
                                )),
                            )}
                        </div>
                        {!selected && (
                            <Button
                                className={'mt-4'}
                                onClick={() => {
                                    onSelect?.(fontId);
                                }}
                            >
                                Use
                            </Button>
                        )}
                    </>
                )}
            </CardContent>
        </Card>
    );
}

export default FontCard;
