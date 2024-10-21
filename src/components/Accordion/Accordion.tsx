import React, { ReactNode } from 'react';
import AccordionItem from '@/components/Accordion/AccordionItem';

const Accordion = ({ children }: { children?: ReactNode }) => {
    return <div className={'flex flex-col w-full'}>{children}</div>;
};

Accordion.Item = AccordionItem;

export default Accordion;
