import { Ionic$, IonicButton, IonicInput } from "../helpers";
import Page from "./page";

class Login extends Page {
  get username() {
    return new IonicInput('ion-input [name="username"]');
  }
  get password() {
    return new IonicInput('ion-input [name="password"]');
  }
  get loginButton() {
    return IonicButton.withTitle("Login");
  }

  async login(username: string, password: string) {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.loginButton.tap();
  }
}

export default new Login();
