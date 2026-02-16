define([], function () {
  return {
    "workflowApiVersion": "1.1",
    "metaData": {
      "icon": "https://www.salesforce.com/favicon.ico",
      "iconSmall": "https://www.salesforce.com/favicon.ico",
      "category": "Custom",
      "isConfigured": true
    },
    "type": "REST",
    "lang": {
      "en-US": {
        "name": "Push Relay",
        "description": "Relays a Journey event to an external webhook."
      }
    },
    "arguments": {
      "execute": {
        "inArguments": [
          { "ContactKey": "{{Contact.Key}}" },
          { "CustomerId": "{{Contact.Attribute.DE_TEST_PushRelay_DEV.CustomerId}}" },
          { "DeviceToken": "{{Contact.Attribute.DE_TEST_PushRelay_DEV.DeviceToken}}" }
        ],
        "outArguments": [],
        "url": "https://webhook.site/0ab141b2-ff79-4d32-b1a4-4bd804a8c3f2",
        "verb": "POST",
        "useJwt": true
      }
    },
    "configurationArguments": {
      "applicationExtensionKey": "51e888f3-a223-40a3-8f0c-43eb11942dc9",
      "save": { "url": "https://webhook.site/0ab141b2-ff79-4d32-b1a4-4bd804a8c3f2", "verb": "POST", "useJwt": true },
      "publish": { "url": "https://webhook.site/0ab141b2-ff79-4d32-b1a4-4bd804a8c3f2", "verb": "POST", "useJwt": true },
      "validate": { "url": "https://webhook.site/0ab141b2-ff79-4d32-b1a4-4bd804a8c3f2", "verb": "POST", "useJwt": true },
      "stop": { "url": "https://webhook.site/0ab141b2-ff79-4d32-b1a4-4bd804a8c3f2", "verb": "POST", "useJwt": true },
      "url": "https://arecabal-v.github.io/sfmc-pushrelay-activity/index.html"
    },
    "schema": { "version": 1 }
  };
});
