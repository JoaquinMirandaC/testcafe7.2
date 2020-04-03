import {Selector} from 'testcafe';
const usuario = 'dummyaccount411';
export default class ExamplePage{
    
    constructor(){
        this.usernameInput = Selector('input').withAttribute('name', 'username');
        this.passwordInput = Selector('input').withAttribute('name', 'password');
        this.submitButton = Selector('button[type="submit"]');
        this.accountName=Selector('a').withText(usuario);

    }
}