# DevOps Pipeline Testing Submission

## Project Summary

Automated testing pipeline implemented in CI/CD using GitHub Actions.

## Required Techniques Coverage

- Continuous integration testing: Implemented via lint, unit tests, and build checks on push/PR.
- Regression testing: Implemented via Selenium browser test.
- Deployment testing: Implemented by starting app services and validating live app rendering through Selenium.

## Required Tools Coverage

- GitHub Actions: Configured in workflow.
- Selenium: Implemented in scripts/selenium-test.js.
- JUnit: Generated as junit.xml from test:report.

## Screenshot Evidence

Add your screenshots to docs/screenshots and reference them below.

1. CI workflow file
   ![Workflow](./screenshots/01-workflow.png)

2. Lint gate output
   ![Lint](./screenshots/02-lint.png)

3. Unit tests with JUnit output
   ![Tests JUnit](./screenshots/03-test-junit.png)

4. Build gate output
   ![Build](./screenshots/04-build.png)

5. Selenium deployment/regression output
   ![Selenium](./screenshots/05-selenium.png)

6. Generated JUnit report file
   ![JUnit XML](./screenshots/06-junit-xml.png)

## Commands Used for Verification

- npm --prefix /home/anon/SQAT/TaskNova run lint
- npm --prefix /home/anon/SQAT/TaskNova run test:report
- npm --prefix /home/anon/SQAT/TaskNova run build
- node /home/anon/SQAT/TaskNova/scripts/selenium-test.js

## Notes

- Lint currently reports 2 warnings and 0 errors.
- All tests and build gates passed.
- Selenium deployment/regression test passed.
