import { click, enterValue, } from '../common/utils.ts';

class Registerform {
    private get firstName() {
        return $("//input[@id='g4072-fullname']");
    }
    private get email() {
        return $("//input[@id='g4072-email']")
    }
    private get phoneNumber() {
        return $("//input[@id='g4072-phonenumber']")
    }
    private get gender() {
        return $("//select[@id='g4072-gender']");
    }
    private get yoe() {
        return $("//input[@value='1']");
    }


    private get skills() {
            return $("//input[@value='Functional testing']");
       }
    private get tools() {
        return $("//select[@ id='g4072-qatools']");
       }
    private get others() {
        return $("//textarea[@id='contact-form-comment-g4072-otherdetails']");
    }
    private get submitButton() {
        return $("//button[@type='submit' and contains(text(),'Submit')]");
    }
    private get successmsg() {
        return $("//h4[@id='contact-form-success-header']");
    }





    enterFirstname = async (value: string) => {
        await enterValue(this.firstName, value);
    };
    enterEmail = async (value: string) => {
        await enterValue(this.email, value);
    };
    enterPhone = async (value: string) => {
        await enterValue(this.phoneNumber, value);
    };
    chooseGender = async () => {
        (await this.gender).selectByIndex(1);
    };
    chooseYoe = async () => {
        click(this.yoe);
    };
    chooseSkills = async () => {
        click(this.skills);
    };
    chooseTools = async () => {
         (await this.tools).selectByIndex(1);
    };
    enterDetails = async (value: string) => {
        await enterValue(this.others, value);
    };
    clickSubmitButton = async () => {
        await click(this.submitButton);
    };
    getSuccessMsg = async () => {
        return (await (this.successmsg)).getText()
    };
}

export default new Registerform();
