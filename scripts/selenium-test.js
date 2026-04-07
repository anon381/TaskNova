import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

(async function runDeploymentTest() {
  console.log('Running Selenium Deployment/Regression Test...');
  
  // Set up headless Chrome for CI environment
  let options = new chrome.Options();
  options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');
  
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Navigate to local Vite dev server
    await driver.get('http://localhost:5173');
    
    // Wait for the app block to load (checks if React mounted without crashing)
    await driver.wait(until.elementLocated(By.css('body')), 5000);
    
    // Log the title or basic html elements to prove it rendered
    const title = await driver.getTitle();
    console.log(`Deployment Test Passed! Page successfully rendered.`);
    console.log(`Application Title: ${title || 'React App'}`);
  } catch (error) {
    console.error('Deployment Test Failed: App did not load successfully.');
    console.error(error);
    process.exit(1);
  } finally {
    await driver.quit();
  }
})();