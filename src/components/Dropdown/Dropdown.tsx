import React from 'react';
import { DropdownProps } from './types';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

const Dropdown = ({
    active,
    children,
    trigger = null,
    onOpen,
    onClose,
    alignment = 'bottom-start',
    closeOnClickContent = true,
    disabled = false,
    classes,
}: DropdownProps) => {
    return (
        <Popover
            placement={alignment}
            withOverlay={false}
            open={!disabled ? active : false}
            onOpenChange={
                onOpen || onClose
                    ? (value) => {
                          if (value) {
                              onOpen?.();
                          } else {
                              onClose?.();
                          }
                      }
                    : undefined
            }
            closeOnClickContent={closeOnClickContent}
        >
            <PopoverTrigger className={classes?.trigger}>
                {trigger}
            </PopoverTrigger>
            <PopoverContent className={'!p-0'} style={{ zIndex: 99999991 }}>
                {children}
            </PopoverContent>
        </Popover>
    );
};

export default Dropdown;
