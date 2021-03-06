$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/my_first.feature");
formatter.feature({
  "line": 1,
  "name": "Finnet Login",
  "description": "As a user I should able to login into Finnet.",
  "id": "finnet-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "I login with valid credential",
  "description": "",
  "id": "finnet-login;i-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to \"http://showroom-painelfornecedor.finnet.com.br/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on element having class \"adjsMenuAcesso\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"candidato2.master\" into input field having id \"LoginAcesso\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \"candidato2@\" into input field having id \"SenhaAcesso\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on element having class \"adjustTxtSuporte\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"10f5\" into input field having id \"ImagemCaptcha\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on element having id \"BtnAcessar\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on element having class \"format_buttons_quebra\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://showroom-painelfornecedor.finnet.com.br/",
      "offset": 15
    }
  ],
  "location": "PredefinedStepDefinitions.navigate_to(String)"
});
formatter.result({
  "duration": 24410027366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "class",
      "offset": 26
    },
    {
      "val": "adjsMenuAcesso",
      "offset": 33
    }
  ],
  "location": "PredefinedStepDefinitions.click(String,String)"
});
formatter.result({
  "duration": 412271388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "candidato2.master",
      "offset": 9
    },
    {
      "val": "id",
      "offset": 52
    },
    {
      "val": "LoginAcesso",
      "offset": 56
    }
  ],
  "location": "PredefinedStepDefinitions.enter_text(String,String,String)"
});
formatter.result({
  "duration": 180947845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "candidato2@",
      "offset": 9
    },
    {
      "val": "id",
      "offset": 46
    },
    {
      "val": "SenhaAcesso",
      "offset": 50
    }
  ],
  "location": "PredefinedStepDefinitions.enter_text(String,String,String)"
});
formatter.result({
  "duration": 767203148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "class",
      "offset": 26
    },
    {
      "val": "adjustTxtSuporte",
      "offset": 33
    }
  ],
  "location": "PredefinedStepDefinitions.click(String,String)"
});
formatter.result({
  "duration": 271937985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10f5",
      "offset": 9
    },
    {
      "val": "id",
      "offset": 39
    },
    {
      "val": "ImagemCaptcha",
      "offset": 43
    }
  ],
  "location": "PredefinedStepDefinitions.enter_text(String,String,String)"
});
formatter.result({
  "duration": 78836506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 26
    },
    {
      "val": "BtnAcessar",
      "offset": 30
    }
  ],
  "location": "PredefinedStepDefinitions.click(String,String)"
});
formatter.result({
  "duration": 356980304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "class",
      "offset": 26
    },
    {
      "val": "format_buttons_quebra",
      "offset": 33
    }
  ],
  "location": "PredefinedStepDefinitions.click(String,String)"
});
formatter.result({
  "duration": 797795541,
  "status": "passed"
});
});                                       formatter.result({
  "duration": 3010121751885,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027LP1359\u0027, ip: \u0027192.168.15.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\Inmetrics\\AppData\\Local\\Temp\\rust_mozprofile.b3jAxZ3a4YmF, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d57.0, platformVersion\u003d10.0, moz:processID\u003d5112, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt, moz:webdriverClick\u003dfalse}]\nSession ID: ee11f7ad-2b79-4996-885e-2bd248f730ac\n*** Element info: {Using\u003dcss selector, value\u003da[href\u003d\u0027/logout\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat info.seleniumcucumber.methods.ProgressMethods.waitForElementToDisplay(ProgressMethods.java:31)\r\n\tat info.seleniumcucumber.stepdefinitions.PredefinedStepDefinitions.wait_for_ele_to_display(PredefinedStepDefinitions.java:486)\r\n\tat ✽.Then I wait 5 seconds for element having css \"a[href\u003d\u0027/logout\u0027]\" to display(features/my_first.feature:12)\r\n",
  "status": "failed"
});
});