import React from 'react';
import EditorWrapper from '@/components/EditorWrapper';

export default async function Home() {
    // const response: any = await fetch('https://reqres.in/api/users?page=1');

    const users: any = [];

    // if (response) {
    //     const data = await response.json();
    //     users = data.data;
    // }

    return <EditorWrapper data={{ users }} />;
}
