import { test, expect} from '@playwright/test'
import { LoginPage } from '../pages/login.page'

test.describe('Login', () => {
    let loginPage: LoginPage;
    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('successful login with valid credentials', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(loginPage.page).toHaveURL(/inventory/);
  });
});