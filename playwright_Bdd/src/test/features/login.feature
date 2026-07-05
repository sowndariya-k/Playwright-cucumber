Feature: User Authentication tests

Background:
Given User navigates to application
And User click on the login link

Scenario:Login should be success
And User enter the username as "sowndariya"
And User enter the password as "Sow@911!"
When User click on the login button
Then Login should be success

Scenario:Login should not be success
And User enter the username as "sowndariya"
And User enter the password as ""
When User click on the login button
Then Login should fail

