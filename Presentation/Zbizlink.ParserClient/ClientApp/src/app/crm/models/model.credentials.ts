export class SalesforceCredential {
    userName: string;
    password: string;
    securityToken: string;
}
export class ZohoCredential {
    initiateOAuth: string;
    oAuthClientId: string;
    oAuthClientSecret: string;
}
export class ConnectionPropeties {
    id: number;
    crmId: number;
    crmImportDataUserId: number;
    keyVar: string;
    valueVar: string;
    createdDate: string
    status: string;
}
export enum SFConnectPropertyEnum {
    userName,
    password,
    securityToken,
}
export const SFConnectProperty = [
    { value: SFConnectPropertyEnum.userName, text: 'userName' },
    { value: SFConnectPropertyEnum.password, text: 'password' },
    { value: SFConnectPropertyEnum.securityToken, text: 'securityToken' }
];