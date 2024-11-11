import { TokenProvider } from '@onemineral/pms-js-sdk';

export class MasterPmsTokenProvider implements TokenProvider {
    public get(): string {
        return process.env.PMS_API_TOKEN || '';
    }
}

export class ClientPmsTokenProvider implements TokenProvider {
    constructor(protected readonly token: string) {
        this.token = token;
    }

    get(): string {
        return this.token;
    }
}

const masterPmsTokenProvider = new MasterPmsTokenProvider();

export { masterPmsTokenProvider };
