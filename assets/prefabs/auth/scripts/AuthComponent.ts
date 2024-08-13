import { EditBox, Button, _decorator, Component, log } from "cc";

const { ccclass, property } = _decorator;

@ccclass
export default class AuthComponent extends Component {

    @property(EditBox)
    private usernameInput: EditBox = null;

    @property(EditBox)
    private passwordInput: EditBox = null;

    @property(Button)
    private loginButton: Button = null;

    onLoad() {
        this.loadCredentials();
        this.loginButton.node.on('click', this.onLoginButtonClick, this);
    }

    private onLoginButtonClick() {
        const username = this.usernameInput.string.trim();
        const password = this.passwordInput.string.trim();

        if (username && password) {
            this.saveCredentials(username, password);
            log('Login successful!');
        } else {
            log('Please enter both username and password.');
        }
    }

    private saveCredentials(username: string, password: string) {
        // Сохраняем данные в localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }

    private loadCredentials() {
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        if (savedUsername && savedPassword) {
            this.usernameInput.string = savedUsername;
            this.passwordInput.string = savedPassword;
        }
    }
}
