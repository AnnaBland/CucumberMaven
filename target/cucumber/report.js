$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Create user",
  "description": "",
  "id": "create-user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Create user using API",
  "description": "",
  "id": "create-user;create-user-using-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "create new User",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "start page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "login by User",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});