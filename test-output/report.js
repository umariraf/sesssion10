$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/new_account.feature");
formatter.feature({
  "line": 1,
  "name": "New Account Page",
  "description": "As a user I want a New Account Page so that accounts can\r\nbe created",
  "id": "new-account-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8058822300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "C234 - New Account page should display with error",
  "description": "",
  "id": "new-account-page;c234---new-account-page-should-display-with-error",
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
  "duration": 4446209800,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "duration": 3631927000,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.new_Account_page_should_display()"
});
formatter.result({
  "duration": 48565600,
  "error_message": "junit.framework.AssertionFailedError: Page not found\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat steps.NewAccountSteps.new_Account_page_should_display(NewAccountSteps.java:45)\r\n\tat ✽.Then New Account page should display(./src/test/java/features/new_account.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5769173900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "C235 - Create a new account",
  "description": "",
  "id": "new-account-page;c235---create-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a user with username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user creates a new account using title \"\u003ctitle\u003e\" Description \"\u003cdescription\u003e\" Amount \"\u003camount\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "new-account-page;c235---create-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title",
        "description",
        "amount"
      ],
      "line": 15,
      "id": "new-account-page;c235---create-a-new-account;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Calzone",
        "two topping",
        "10"
      ],
      "line": 16,
      "id": "new-account-page;c235---create-a-new-account;;2"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Sandwich",
        "Beef",
        "5"
      ],
      "line": 17,
      "id": "new-account-page;c235---create-a-new-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6249825300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "C235 - Create a new account",
  "description": "",
  "id": "new-account-page;c235---create-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user creates a new account using title \"Calzone\" Description \"two topping\" Amount \"10\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
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
  "duration": 3907098300,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "duration": 3709716500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Calzone",
      "offset": 40
    },
    {
      "val": "two topping",
      "offset": 62
    },
    {
      "val": "10",
      "offset": 83
    }
  ],
  "location": "NewAccountSteps.user_creates_a_new_account_using_title_Description_Amount(String,String,String)"
});
formatter.result({
  "duration": 6203389000,
  "status": "passed"
});
formatter.after({
  "duration": 5737832700,
  "status": "passed"
});
formatter.before({
  "duration": 6669656300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "C235 - Create a new account",
  "description": "",
  "id": "new-account-page;c235---create-a-new-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user creates a new account using title \"Sandwich\" Description \"Beef\" Amount \"5\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
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
  "duration": 3599316000,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "duration": 3367115300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sandwich",
      "offset": 40
    },
    {
      "val": "Beef",
      "offset": 63
    },
    {
      "val": "5",
      "offset": 77
    }
  ],
  "location": "NewAccountSteps.user_creates_a_new_account_using_title_Description_Amount(String,String,String)"
});
formatter.result({
  "duration": 6885524200,
  "status": "passed"
});
formatter.after({
  "duration": 5692023500,
  "status": "passed"
});
});