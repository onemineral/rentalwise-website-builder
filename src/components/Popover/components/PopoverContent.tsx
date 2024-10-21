import * as React from 'react';
import {
    FloatingFocusManager,
    FloatingOverlay,
    FloatingPortal,
    useMergeRefs,
} from '@floating-ui/react';
import { usePopoverContext } from '../Popover';
import { forwardRef, HTMLProps, useMemo } from 'react';
import classnames from 'classnames';

const PopoverContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
    function PopoverContent({ style, ...props }: any, propRef) {
        const { context: floatingContext, ...context } = usePopoverContext();
        const ref = useMergeRefs([context.refs.setFloating, propRef]);

        const content = useMemo(() => {
            return (
                <FloatingFocusManager
                    context={floatingContext}
                    modal={context.modal}
                >
                    <div
                        ref={ref}
                        style={{ ...context.floatingStyles, ...style }}
                        aria-labelledby={context.labelId}
                        aria-describedby={context.descriptionId}
                        {...context.getFloatingProps(props)}
                        className={classnames(
                            'border rounded-md shadow-md p-4 bg-white focus-visible:outline-none',
                            props.className,
                        )}
                        onClick={(e: any) => {
                            // auto close on click content
                            if (context.closeOnClickContent) {
                                context.setOpen(false);
                            }
                        }}
                    >
                        {props.children}
                    </div>
                </FloatingFocusManager>
            );
        }, [context, floatingContext, props, ref, style]);

        if (!floatingContext.open) return null;

        return (
            <FloatingPortal>
                {context.withOverlay ? (
                    <FloatingOverlay
                        className={'bg-black z-50 bg-opacity-50'}
                        lockScroll
                    >
                        {content}
                    </FloatingOverlay>
                ) : (
                    content
                )}
            </FloatingPortal>
        );
    },
);

export default PopoverContent;
