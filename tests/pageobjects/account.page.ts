import { Ionic$, IonicItem } from '../helpers';
import { IonicAlert } from '../helpers/ionic/components/alert';
import Page from './page';

class Account extends Page {
  get updatePictureButton() {
    return IonicItem.withTitle('Update Picture');
  }
  get changeUsernameButton() {
    return IonicItem.withTitle('Change Username');
  }
  get changePasswordButton() {
    return IonicItem.withTitle('Change Password');
  }
  get supportButton() {
    return IonicItem.withTitle('Support');
  }
  get logoutButton() {
    return IonicItem.withTitle('Logout');
  }
  get changeUsernameAlert() {
    return new IonicAlert();
  }
  get usernameLabel() {
    return Ionic$.$('h2');
  }
}

export default new Account();
