import { EditBox, Button, _decorator, Component, log } from "cc";
import Facade from "../../../Scripts/Facade";

const { ccclass, property } = _decorator;

@ccclass
export default class AuthComponent extends Component {

    @property(EditBox)
    private usernameInput: EditBox = null;

    @property(EditBox)
    private passwordInput: EditBox = null;

    @property(Button)
    private loginButton: Button = null;

    private isRegistered: boolean = false;

    onLoad() {
        this.isRegistered = this.checkIfRegistered();
        this.loadCredentials();
        this.loginButton.node.on('click', this.onLoginButtonClick, this);
    }

    private onLoginButtonClick() {
        const username = this.usernameInput.string.trim();
        const password = this.passwordInput.string.trim();

        if (username && password) {
            if (this.isRegistered) {
                if (this.authenticate(username, password)) {
                    log('Login successful!');

                    Facade.username = username;
                } else {
                    log('Invalid username or password.');
                }
            } else {
                this.register(username, password);
                log('Registration successful! You can now log in.');
            }
        } else {
            log('Please enter both username and password.');
        }
    }

    private authenticate(username: string, password: string): boolean {
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        return savedUsername === username && savedPassword === password;
    }

    private register(username: string, password: string) {
        this.saveCredentials(username, password);
        this.isRegistered = true;
    }

    private saveCredentials(username: string, password: string) {
        // Save credentials to localStorage
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

    private checkIfRegistered(): boolean {
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        return !!(savedUsername && savedPassword);
    }
}
