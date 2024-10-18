import React, { forwardRef, HTMLProps } from 'react';
import { useTooltipContext } from './hooks/useTooltipContext';
import {
    FloatingArrow,
    FloatingPortal,
    useMergeRefs,
} from '@floating-ui/react';
import classnames from 'classnames';

const TooltipContent = forwardRef<
    HTMLDivElement,
    HTMLProps<HTMLDivElement> & {
        classNames?: any;
    }
>(function TooltipContent({ style, ...props }, propRef) {
    const context = useTooltipContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);
    const { classNames = {} } = props;

    if (!context.open) return null;

    return (
        <FloatingPortal>
            <div
                ref={ref}
                className={classnames(
                    'p-2 rounded-md shadow-md text-xs',
                    {
                        'bg-black text-white': !context.light,
                        'bg-white': context.light,
                    },
                    // classNames.content,
                )}
                style={{
                    ...context.floatingStyles,
                    ...style,
                    zIndex: 9999999,
                }}
                {...context.getFloatingProps(props)}
            >
                {props.children}
                <FloatingArrow
                    ref={context.arrowRef}
                    context={context as any}
                    fill={context.light ? 'white' : 'black'}
                    className={classNames.arrow}
                />
            </div>
        </FloatingPortal>
    );
});

export default TooltipContent;
