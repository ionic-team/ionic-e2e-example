import { IonicButton, IonicInput } from '../helpers';
import Page from './page';

class Signup extends Page {
  get username() { return new IonicInput('[name="username"]') }
  get password() { return new IonicInput('[name="password"]') }
  get signupButton() { return IonicButton.withTitle('Create') }

  async signup(username: string, password: string) {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.signupButton.tap();
  }
}

export default new Signup();
