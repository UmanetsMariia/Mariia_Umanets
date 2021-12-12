Feature: testing work shifts for https://opensource-demo.orangehrmlive.com/
  Background:
    Given user navigates on https://opensource-demo.orangehrmlive.com/
    When user types in the username and password
    And clicks on login button
    Then user navigates to https://opensource-demo.orangehrmlive.com/index.php/dashboard

  Scenario: adding new work shift
    Given user is on Work Shifts page
    When user clicks on add
    And enters relevant information
    And clicks save
    Then new work shift appears on the grid

    Scenario: deleting work shift
    When user selects relevant work shift
    And clicks Remove button
    And clicks ok
    Then work shift has been deleted from the grid
