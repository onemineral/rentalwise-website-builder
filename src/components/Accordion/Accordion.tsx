import React, { ReactNode } from 'react';
import AccordionItem from '@/components/Accordion/AccordionItem';

const Accordion = ({ children }: { children?: ReactNode }) => {
    return <div className={'flex flex-col w-full space-y-1'}>{children}</div>;
};

Accordion.Item = AccordionItem;

export default Accordion;
