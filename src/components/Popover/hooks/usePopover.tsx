import * as React from 'react';
import {
    autoUpdate,
    flip,
    offset,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useInteractions,
    useRole,
} from '@floating-ui/react';
import { useState } from 'react';
import { PopoverOptions } from '../types';

export function usePopover({
    initialOpen = false,
    withOverlay,
    placement = 'bottom',
    modal,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
    closeOnClickContent,
}: PopoverOptions = {}) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
    const [labelId, setLabelId] = useState<string | undefined>();
    const [descriptionId, setDescriptionId] = useState<string | undefined>();

    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    const data = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({
                crossAxis: placement.includes('-'),
                fallbackAxisSideDirection: 'end',
                padding: 5,
            }),
            shift({ padding: 5 }),
        ],
    });

    const context = data.context;

    const click = useClick(context, {
        enabled: controlledOpen == null,
    });
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const interactions = useInteractions([click, dismiss, role]);

    return React.useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data,
            modal,
            withOverlay,
            labelId,
            descriptionId,
            setLabelId,
            setDescriptionId,
            closeOnClickContent,
        }),
        [
            open,
            setOpen,
            interactions,
            data,
            modal,
            withOverlay,
            labelId,
            descriptionId,
            closeOnClickContent,
        ],
    );
}
