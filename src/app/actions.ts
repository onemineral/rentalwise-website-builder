'use server';

import { PaginatedResponse, Property } from '@onemineral/pms-js-sdk';
import { getPmsClient, masterPmsClient } from '@/lib/pms-client';

export async function queryProperties() {
    const response: PaginatedResponse<Property> =
        await masterPmsClient.property.query();

    return response.response;
}

export async function getWebsiteChannelImages() {
    const websiteChannelResponse =
        await masterPmsClient.websiteChannel.fetchByDomain({
            domain: 'localhost:3001',
        });

    const websiteChannel = websiteChannelResponse.response;
    const channelPmsClient = getPmsClient(websiteChannel);
    try {
        const imagesResponse =
            await channelPmsClient.websiteChannel.queryImages({
                channel: websiteChannel.id,
                paginate: {
                    perpage: 200,
                },
            });

        return imagesResponse.response;
    } catch (e) {
        console.error(e);
    } finally {
        return null;
    }
}
