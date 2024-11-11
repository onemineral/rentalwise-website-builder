import { newPmsClient, WebsiteChannel } from '@onemineral/pms-js-sdk';
import {
    ClientPmsTokenProvider,
    masterPmsTokenProvider,
} from '@/lib/pms-token.provider';
const baseURL = process.env.PMS_BASE_URL;
const defaultHeaders: Record<string, string> = {};

export const masterPmsClient = newPmsClient({
    baseURL: baseURL || '',
    tokenProvider: masterPmsTokenProvider,
    defaultHeaders,
});

export const getPmsClient = (channel: WebsiteChannel) => {
    return newPmsClient({
        baseURL: baseURL || '',
        tokenProvider: new ClientPmsTokenProvider(channel.token as string),
        defaultHeaders,
    });
};
