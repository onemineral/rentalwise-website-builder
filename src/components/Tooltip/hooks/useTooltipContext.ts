import { useTooltip } from './useTooltip';
import { createContext, useContext } from 'react';

type ContextType = ReturnType<typeof useTooltip> | null;

export const TooltipContext = createContext<ContextType>(null);

export const useTooltipContext = () => {
    const context = useContext(TooltipContext);

    if (context == null) {
        throw new Error('Tooltip components must be wrapped in <Tooltip />');
    }

    return context;
};
