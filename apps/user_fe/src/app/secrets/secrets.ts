import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

export const accessSecretVersion = async (secretId: string) => {
    const client = new SecretManagerServiceClient();
    const name = `projects/sound-machine-399502/secrets/${secretId}/versions/latest`;
    const [version] = await client.accessSecretVersion({ name });
    const payload = version?.payload?.data?.toString() ?? '';
    return payload;
}