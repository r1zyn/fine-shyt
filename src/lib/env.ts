declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            WEBHOOK_URL: string;
        }
    }
}

export const env: NodeJS.ProcessEnv = global.process.env || {
    NODE_ENV: process.env.NODE_ENV,
    TZ: process.env.TZ,
    WEBHOOK_URL: process.env.WEBHOOK_URL
};

if (process.env.NODE_ENV !== "production") global.process.env = env;