import * as React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { usePopoverContext } from '../Popover';
import { PopoverTriggerProps } from '../types';
import { cloneElement, forwardRef, HTMLProps, isValidElement } from 'react';

const PopoverTrigger = forwardRef<
    HTMLElement,
    HTMLProps<HTMLElement> & PopoverTriggerProps
>(function PopoverTrigger({ children, asChild = false, ...props }, propRef) {
    const context = usePopoverContext();
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
    // @TODO Check this - it was button and cause some html validation issues
    return (
        <a
            ref={ref}
            role={'button'}
            type="button"
            // The User can style the trigger based on the state
            data-state={context.open ? 'open' : 'closed'}
            {...context.getReferenceProps(props)}
            className={props.className}
        >
            {children}
        </a>
    );
});

export default PopoverTrigger;
