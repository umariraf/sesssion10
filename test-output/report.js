$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/new_account.feature");
formatter.feature({
  "line": 1,
  "name": "New Account Page",
  "description": "As a user I want a New Account Page so that accounts can\r\nbe created",
  "id": "new-account-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7768823500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Add new account",
  "description": "",
  "id": "new-account-page;add-new-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "New Account page should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 2820896200,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "duration": 3297892400,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.new_Account_page_should_display()"
});
formatter.result({
  "duration": 2252000,
  "error_message": "junit.framework.AssertionFailedError: Page did not display\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat steps.NewAccountSteps.new_Account_page_should_display(NewAccountSteps.java:40)\r\n\tat ✽.Then New Account page should display(./src/test/java/features/new_account.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5667162800,
  "status": "passed"
});
});