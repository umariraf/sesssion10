$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/new_account.feature");
formatter.feature({
  "line": 1,
  "name": "New Account Page",
  "description": "As a user I want a New Account Page so that accounts can\r\nbe created",
  "id": "new-account-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8245626100,
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
  "duration": 2903492100,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "duration": 3378082300,
  "status": "passed"
});
formatter.after({
  "duration": 5868645800,
  "status": "passed"
});
});