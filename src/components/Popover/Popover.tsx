import * as React from 'react';
import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    ReactNode,
} from 'react';
import { usePopover } from './hooks/usePopover';
import { PopoverOptions } from './types';

type ContextType =
    | (ReturnType<typeof usePopover> & {
          setLabelId: Dispatch<SetStateAction<string | undefined>>;
          setDescriptionId: Dispatch<SetStateAction<string | undefined>>;
      })
    | null;

const PopoverContext = createContext<ContextType>(null);

export const usePopoverContext = () => {
    const context = useContext(PopoverContext);

    if (context == null) {
        throw new Error('Popover components must be wrapped in <Popover />');
    }

    return context;
};

const Popover = ({
    children,
    modal = false,
    withOverlay = true,
    ...restOptions
}: {
    children: ReactNode;
} & PopoverOptions) => {
    // This can accept any props as options, e.g. `placement`,
    // or other positioning options.
    const popover = usePopover({
        modal,
        withOverlay,
        ...restOptions,
    });

    return (
        <PopoverContext.Provider value={popover}>
            {children}
        </PopoverContext.Provider>
    );
};

export default Popover;
