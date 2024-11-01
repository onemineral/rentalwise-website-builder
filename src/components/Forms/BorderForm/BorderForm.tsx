import React, { useState } from 'react';
import {
    BorderAllIcon,
    BorderBottomIcon,
    BorderLeftIcon,
    BorderRightIcon,
    BorderTopIcon,
} from '@radix-ui/react-icons';
import Tooltip from '@/components/Tooltip/Tooltip';
import BorderStyleButtonGroupInput from '@/components/Forms/Inputs/BorderStyleButtonGroupInput';
import TextInput from '@/components/Forms/Inputs/TextInput';
import SizeUnitInput from '@/components/Forms/Inputs/SizeUnitInput';
import ValueInput from '@/components/Forms/Inputs/ValueInput';
import { SIZE_UNITS } from '@/components/types';
import ColorInput from '@/components/Forms/Inputs/ColorInput';

const IconWrapper = ({
    description,
    children,
}: {
    description?: string;
    children: React.ReactNode;
}) => {
    return (
        <Tooltip content={description}>
            <div
                className={
                    'flex justify-center hover:bg-slate-300 cursor-pointer'
                }
            >
                {children}
            </div>
        </Tooltip>
    );
};

const BorderForm = ({
    record,
    onChange,
}: {
    record?: any;
    onChange?: (value: any) => void;
}) => {
    const [localValue, setLocalValue] = useState(record);

    return (
        <div className={'grid grid-cols-12 gap-1 items-center'}>
            <div className={'col-span-4'}>
                <div className={'grid grid-cols-3 grid-rows-3 gap-1.5 mr-1'}>
                    <div />
                    <IconWrapper description={'Top'}>
                        <BorderTopIcon width={18} height={18} />
                    </IconWrapper>
                    <div />
                    <IconWrapper description={'Left'}>
                        <BorderLeftIcon width={18} height={18} />
                    </IconWrapper>
                    <IconWrapper description={'All'}>
                        <BorderAllIcon width={18} height={18} />
                    </IconWrapper>
                    <IconWrapper description={'Right'}>
                        <BorderRightIcon width={18} height={18} />
                    </IconWrapper>
                    <div />
                    <IconWrapper description={'Bottom'}>
                        <BorderBottomIcon width={18} height={18} />
                    </IconWrapper>
                    <div />
                </div>
            </div>
            <div className={'col-span-8'}>
                <div className={'flex flex-col space-y-1'}>
                    <BorderStyleButtonGroupInput
                        classes={{ label: '!min-w-10 !w-10' }}
                    />
                    <ValueInput
                        classes={{ label: '!min-w-10 !w-10' }}
                        label={'Width'}
                        options={SIZE_UNITS}
                    />
                    <ColorInput classes={{ label: '!min-w-10 !w-10' }} />
                </div>
            </div>
        </div>
    );
};

export default BorderForm;
