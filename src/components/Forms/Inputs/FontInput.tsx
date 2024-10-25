import React from 'react';
import classnames from 'classnames';
import FontShowcase, {
    FontData,
    getFontIdFromUrl,
} from '@/components/FontShowcase/FontShowcase';
import { Dropdown } from '@/components/Dropdown';

const FontInput = ({
    value,
    onChange,
    fonts,
    loading,
    error,
}: {
    value?: string;
    onChange?: (value: string) => void;
    fonts?: [string, FontData][];
    loading?: boolean;
    error?: string | null;
}) => {
    const currentFont: any = fonts?.find(
        (item: any) => value && item[0] === getFontIdFromUrl(value),
    );

    return (
        <div className={classnames('relative flex w-full')}>
            <label className={'text-xs flex items-center min-w-20 w-20 p-1'}>
                Font
            </label>
            <Dropdown
                trigger={
                    <input
                        className={
                            'relative w-full bg-white placeholder:text-slate-400 text-slate-700 text-xs border border-slate-200 rounded-md px-2 pr-8 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow focus-visible:ring-0 focus-visible:outline-none'
                        }
                        value={currentFont?.[1].familyName || 'Select font'}
                        readOnly
                    />
                }
                classes={{ trigger: 'w-full' }}
            >
                <div className="w-72">
                    <FontShowcase
                        fonts={fonts}
                        value={value}
                        onChange={onChange}
                        loading={loading}
                        error={error}
                    />
                </div>
            </Dropdown>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="h-5 w-5 ml-1 absolute top-[0.2rem] right-1 text-slate-700 pointer-events-none"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
            </svg>
        </div>
    );
};

export default FontInput;
