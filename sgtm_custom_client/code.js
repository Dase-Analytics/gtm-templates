/* 
    Simple sGTM client with default request path '/custom-client'
*/


const claimRequest = require('claimRequest');
const getRequestPath = require('getRequestPath');
const getRequestBody = require('getRequestBody');
const runContainer = require('runContainer');
const addEventCallback = require('addEventCallback');
const JSON = require('JSON');
const returnResponse = require('returnResponse');
const setResponseStatus = require('setResponseStatus');
const setResponseHeader = require('setResponseHeader');
const logToConsole = require('logToConsole');

const requestPath = '/' + data.requestPath || '/custom-client';

if (getRequestPath() === requestPath) {
  
    claimRequest();

    //Reading the request body and parsing the data
    const requestBody = getRequestBody();
    const events = JSON.parse(requestBody);

    //Running the container for each event
    events.forEach((event) => {
        runContainer(event, (bindToEvent) => {
            bindToEvent(addEventCallback)((containerId, eventData) => {
    
            });
        });
    });
  
    //Creating custom response
    setResponseStatus(200);
    setResponseHeader("message", "Custom client: request successfully processed!");
    returnResponse();
}