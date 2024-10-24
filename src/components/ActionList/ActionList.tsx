import React, { ReactNode } from 'react';
import ActionListItem from '@/components/ActionList/ActionListItem';
import classnames from 'classnames';

const ActionList = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={classnames(
                'flex flex-col divide-y divide-gray-200 text-xs min-w-32',
                className,
            )}
        >
            {children}
        </div>
    );
};

ActionList.Item = ActionListItem;

export default ActionList;
