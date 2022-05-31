import {  Browser, Page , WebComponent } from '../lib';
import { By,until, WebDriver } from 'selenium-webdriver'
import config from '../config';

let driver: WebDriver

export class LoginPage extends Page {
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.baseUrl}/`);
  }

  loginPageId = "root";
  emailXPath = "//*[@id=\"root\"]/div/div[2]/div/form/div/div/div[1]/div[1]/div[2]/input";
  emailErrorMessageXPath = "//*[@id=\"root\"]/div/div[2]/div/form/div/div/div[2]/div/div[2]";
  nextButtonXPath = "//*[@id=\"root\"]/div/div[2]/div/form/button/div/div";
  passwordXPath = "//*[@id=\"root\"]/div/div[2]/div/form/div/div[2]/div/div/div/div[1]/div[1]/div[2]/input";
  credentialsErrorMessageXPath = "//*[@id=\"root\"]/div/div[2]/div/form/div/div[2]/div/div/div/div[2]/div/div[2]";
  loginButtonXPath = "//*[@id=\"root\"]/div/div[2]/div/form/div/button";

  public loadPage() {
    driver.wait(until.elementIsVisible(driver.findElement(By.id(this.loginPageId))))
  }

  public writeValidEmail(){
    const email = driver.findElement(By.xpath(this.emailXPath))
    email.click();
    email.sendKeys("mareana@gmail.com");
  }

  public writeValidPassword(){
    const password = driver.findElement(By.xpath(this.passwordXPath))
    password.click();
    password.sendKeys("password");

  }

  public writeWrongEmail(invalidEmail: string){
    const email = driver.findElement(By.xpath(this.emailXPath))
    email.click();
    email.sendKeys(invalidEmail);
  }

  public writeWrongPassword(invalidPassword: string){
    const password = driver.findElement(By.xpath(this.passwordXPath))
    password.click();
    password.sendKeys(invalidPassword);

  }

  public clickNext(){
    const button = driver.findElement(By.xpath(this.nextButtonXPath))
    button.click();
  }

  public clickLogin(){
    const button = driver.findElement(By.xpath(this.loginButtonXPath))
    button.click();
  }

  public loginWithValidCredentials(){
    this.writeValidEmail;
    this.clickNext;
    this.writeValidPassword;
    this.clickLogin;
  }

  public loginWithUnregisteredEmail(unregisteredEmail: string){
    this.writeWrongEmail(unregisteredEmail);
    this.clickNext;
    this.writeValidPassword;
    this.clickLogin;
  }

  public loginWithInvalidEmail(invalidEmail: string){
    this.writeWrongEmail("HHH@SSSS");
  }

  public loginWithWrongPassword(){
    this.writeValidEmail;
    this.clickNext;
    this.writeWrongPassword("123");
    this.clickLogin;
  }

  public isEmailErrorMessageShown(){
    var message = driver.findElement(By.xpath(this.emailErrorMessageXPath));
    try {
      return message.isDisplayed();
    } catch (ex) {
      return false;
    }
  }

  public isCredentialsErrorMessageShown(){
      var message = driver.findElement(By.xpath(this.credentialsErrorMessageXPath));
      try {
        return message.isDisplayed();
      } catch (ex) {
        return false;
      }
  }

}