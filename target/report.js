$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/MobilePurchase.feature");
formatter.feature({
  "name": "Mobile Purchase",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login to flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_login_to_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@mobile"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user search mobile",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchase.user_search_mobile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the mobile and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_choose_the_mobile_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchase.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user quit the launches",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_quit_the_launches()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login to flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_login_to_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile one dimension list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@mobile"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user search mobile by using one dimensional list",
  "rows": [
    {
      "cells": [
        "Realme Mobiles",
        "iphone",
        "Vivo Mobiles"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchase.user_search_mobile_by_using_one_dimensional_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the mobile and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_choose_the_mobile_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchase.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user quit the launches",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_quit_the_launches()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login to flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_login_to_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile one dimension map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.step({
  "name": "user search mobile by using one dimensional map",
  "rows": [
    {
      "cells": [
        "Phone1",
        "Realme Mobiles"
      ]
    },
    {
      "cells": [
        "Phone2",
        "iphone"
      ]
    },
    {
      "cells": [
        "Phone3",
        "Vivo Mobiles"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchase.user_search_mobile_by_using_one_dimensional_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the mobile and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_choose_the_mobile_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchase.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user quit the launches",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_quit_the_launches()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Mobile",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user search mobile \"\u003cPhones\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user choose the mobile and doing payments",
  "keyword": "And "
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.step({
  "name": "user quit the launches",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Phones"
      ]
    },
    {
      "cells": [
        "iphone"
      ]
    },
    {
      "cells": [
        "Realme Mobiles"
      ]
    },
    {
      "cells": [
        "Redmi Mobiles"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login to flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_login_to_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.step({
  "name": "user search mobile \"iphone\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchase.user_search_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the mobile and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_choose_the_mobile_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchase.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user quit the launches",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_quit_the_launches()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login to flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_login_to_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.step({
  "name": "user search mobile \"Realme Mobiles\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchase.user_search_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the mobile and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_choose_the_mobile_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchase.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user quit the launches",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_quit_the_launches()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login to flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_login_to_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.step({
  "name": "user search mobile \"Redmi Mobiles\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchase.user_search_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the mobile and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_choose_the_mobile_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchase.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user quit the launches",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_quit_the_launches()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});