// urls.ts
interface Urls {
    dev: string;
    qa: string;
    prod: string;
    [key: string]: string; // Index signature allowing any string key
}

const urls: Urls = {
    dev: 'https://www.flipkart.com/',
    qa: 'https://qavalidation.com/demo-form/',
    prod: 'https://www.amazon.in/',
};

export default function getBaseUrl(env: string): string {
    return urls[env] || urls.dev; // default to dev if the environment is not found
}
