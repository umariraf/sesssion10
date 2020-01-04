Feature: New Account Page
	As a user I want a New Account Page so that accounts can
	be created
	
Scenario: Add new account
Given a user with username "techfiosdemo@gmail.com" and password "abc123"
When user navigates to New Account Page
Then New Account page should display