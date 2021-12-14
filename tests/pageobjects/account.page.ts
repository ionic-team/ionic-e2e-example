import { IonicItem } from '../helpers';
import Page from './page';

class Account extends Page {
  get updatePictureButton() { return IonicItem.withTitle('Update Picture') }
  get changeUsernameButton() { return IonicItem.withTitle('Change Username') }
  get changePasswordButton() { return IonicItem.withTitle('Change Password') }
  get supportButton() { return IonicItem.withTitle('Support') }
  get logoutButton() { return IonicItem.withTitle('Logout') }
}

export default new Account();
