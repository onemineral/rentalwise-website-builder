import React from 'react';
import { useTooltipContext } from './hooks/useTooltipContext';
import { useMergeRefs } from '@floating-ui/react';
import { cloneElement, HTMLProps, isValidElement } from 'react';
import classnames from 'classnames';

const TooltipTrigger = React.forwardRef<
    HTMLElement,
    HTMLProps<HTMLElement> & { asChild?: boolean; className?: string }
>(function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
    const context = useTooltipContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // `asChild` allows the User to pass any element as the anchor
    if (asChild && isValidElement(children)) {
        return cloneElement(
            children,
            context.getReferenceProps({
                ref,
                ...props,
                ...children.props,
                'data-state': context.open ? 'open' : 'closed',
            }),
        );
    }

    return (
        <button
            ref={ref}
            // The User can style the trigger based on the state
            data-state={context.open ? 'open' : 'closed'}
            {...context.getReferenceProps(props)}
            className={classnames(
                'w-full focus-visible:outline-none',
                props.className,
            )}
        >
            {children}
        </button>
    );
});

export default TooltipTrigger;
