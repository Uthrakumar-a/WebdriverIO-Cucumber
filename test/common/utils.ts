import { ChainablePromiseElement } from 'webdriverio';
import getBaseUrl from './urls.ts';
import type { Pickle, PickleStep } from '@cucumber/messages';

export type Element = ChainablePromiseElement<Promise<WebdriverIO.Element>> | ChainablePromiseElement<WebdriverIO.Element>;

export const navigateToUrl = async (): Promise<void> => {
    const baseUrl = getBaseUrl(process.env.NODE_ENV || 'https://www.example.com');
    const url = baseUrl;
    console.log('Navigating to URL:', url);
    await browser.url(url);
};

async function handleAsyncError<X>(fun: () => Promise<X>, name: string) {
    try {
        console.log(`[${name}] run function`);
        return await fun();
    } catch (err) {
        console.error(`[${name}] cannot run function:`, err);
    }
}

export const beforeStep = (step: PickleStep, _scenario: Pickle) => {
    console.log(`[beforeStep] -------------------- begin step ${step?.text} --------------------`);
};

export const afterStep = () => {
    return async (step: PickleStep, _scenario: Pickle, { passed }: { passed: boolean }) =>
        await handleAsyncError(async () => {
            console.log(`[afterStep] -------------------- end step ${step.text} --------------------`);

            if (!passed) {
                console.log('[afterStep] take screenshot');
                const image = await browser.takeScreenshot();
                console.log(image);
            }
        }, 'afterStep');
};

export async function click(element: Element) {
    await browser.waitUntil(() => element.isDisplayed());
    await browser.waitUntil(() => element.isClickable());
    await element.click();
}
export async function hover(element: Element) {
    await browser.waitUntil(() => element.isDisplayed());
    await browser.waitUntil(() => element.isClickable());
    await element.moveTo();
}

export async function pause(ms: number) {
    return await browser.pause(ms);
}
export async function getElementText(element: Element) {
    await element.isDisplayed();
    await element.waitForDisplayed();
    console.log('Get Element Text----: ' + (await element.getText()));
    return await element.getText();
}
export async function enterValue(element: Element, input: string) {
    await element.isDisplayed();
    await element.setValue(input);
    console.log('Entered Input----: ' + input);
}
export const selectVisibleText = async (elem: Element, text: string) => {
    await elem.waitForExist();
    await elem.selectByVisibleText(text);
};
export const selectIndex = async (elem: Element, index: number) => {
    await elem.waitForExist();
    await elem.selectByIndex(index);
};

export const addLog = (log: string): void => {
    console.log(log);
};

export const generateRandomEmail = async () => {
    const baseEmail = 'user';
    const domain = 'example.com';
    const randomSuffix = Math.floor(Math.random() * 10000);
    return `${baseEmail}${randomSuffix}@${domain}`;
};
