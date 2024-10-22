import React, { ReactNode, useContext } from 'react';
import { MenuContext } from '@/components/Menu/Menu';
import classnames from 'classnames';

export type MenuItemProps = {
    name: string;
    icon: ReactNode;
    hint?: string;
    onClick?: () => void;
};

const MenuItem = ({ name, icon, onClick }: MenuItemProps) => {
    const { activeMenuItem } = useContext(MenuContext);
    const active = activeMenuItem === name;

    return (
        <div
            className={classnames(
                'flex w-full hover:bg-slate-200 cursor-pointer justify-center py-4',
                { 'bg-slate-200': active },
            )}
            onClick={() => onClick?.()}
        >
            {icon}
        </div>
    );
};

export default MenuItem;
