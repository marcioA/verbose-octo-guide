import { Configuration, OpenAIApi } from "openai";

export class Configuration {
    startConfig() {
        const configuration = new Configuration({
            organization: process.env.ORGANIZATION_ID,
            apiKey: process.env.OPENAI_KEY,
        });
    }
}
