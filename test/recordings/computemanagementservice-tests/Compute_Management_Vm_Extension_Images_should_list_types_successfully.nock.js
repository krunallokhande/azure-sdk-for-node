// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/Microsoft.Compute/artifacttypes/vmextension/types?api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"BGInfo\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"CustomScriptExtension\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/CustomScriptExtension\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"JsonADDomainExtension\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/JsonADDomainExtension\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"VMAccessAgent\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/VMAccessAgent\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e9063218-8ceb-4268-90b8-428bac1c55ac',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '0515e286-5c82-442d-9b99-8da9e5c504cf',
  'x-ms-routing-request-id': 'WESTUS:20160120T201651Z:0515e286-5c82-442d-9b99-8da9e5c504cf',
  date: 'Wed, 20 Jan 2016 20:16:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/Microsoft.Compute/artifacttypes/vmextension/types?api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"BGInfo\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"CustomScriptExtension\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/CustomScriptExtension\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"JsonADDomainExtension\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/JsonADDomainExtension\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"VMAccessAgent\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/VMAccessAgent\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e9063218-8ceb-4268-90b8-428bac1c55ac',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '0515e286-5c82-442d-9b99-8da9e5c504cf',
  'x-ms-routing-request-id': 'WESTUS:20160120T201651Z:0515e286-5c82-442d-9b99-8da9e5c504cf',
  date: 'Wed, 20 Jan 2016 20:16:51 GMT',
  connection: 'close' });
 return result; }]];