import { binding, given, then, when, before, after} from 'cucumber-tsflow';
import { assert } from 'chai';
import { Browser } from '../lib';
import { AllPages } from '../pages';

@binding()
export class LoginRegisteredUser {
  
  private pages = new AllPages(new Browser('chrome'));

  @given(/the user is at the login page/)
  public givenTheUserIsAtTheLoginPage(): void  {
    this.pages.login.navigate();
  }

  @when(/the user informs his credentials/)
  public whenTheUserInformsHisCredentials(): void  {
    this.pages.login.loginWithValidCredentials;
  }

  @when(/the user informs his unregistered e-mail/)
  public WhenTheUserInformsHisUnregisteredEmail(): void  {
    this.pages.login.loginWithUnregisteredEmail("grid@grid.com");
  }

  @when(/the user informs his correct e-mail and wrong password/)
  public WhenTheUserInformsHisCorrectEmailAndWrongPassword(): void  {
    this.pages.login.loginWithWrongPassword
  }

  @when(/the user informs an invalid "([^"]*)"/)
  public WhenTheUserInformsTheWrongEmail(invalidEmail: string): void {
    this.pages.login.loginWithInvalidEmail(invalidEmail);
  }

  @when(/the user informs an invalid e-mail/)
  public whenTheUserInformsAnInvalidEmail(): void {
    this.pages.login.loginWithUnregisteredEmail("grid@grid.com");
  }

  @then(/the home page is shown/)
  public thenTheHomePageIsShown(): void  {
    
  }

  @then(/an error message related to the wrong credentials will be shown/)
  public thenAnErrorMessageRelatedToTheWrongCredentialsWillBeShown(): void  {
    assert.isTrue(this.pages.login.isEmailErrorMessageShown);
    this.pages.dispose;
  }

  @then(/an error message related to the wrong e-mail will be shown/)
  public thenAnErrorMessageRelatedToTheWrongEmailWillBeShown(): void  {
    assert.isTrue(this.pages.login.isEmailErrorMessageShown);
    this.pages.dispose;
  }
}