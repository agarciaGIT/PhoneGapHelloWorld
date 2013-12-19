/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        //this.onDeviceReady();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        if(typeof cordova === "undefined" || cordova === null) {

            receivedElement.innerHTML = 'cordova not defined!';

        } else {

            var scanner = cordova.require("cordova/plugin/BarcodeScanner");

            if(typeof scanner === "undefined" || scanner === null) {
                receivedElement.innerHTML = 'scanner not defined!';
            } else {
                receivedElement.innerHTML = 'scanner ready!';

                   var calendar = cordova.require("cordova/plugin/Calendar");

                    if(typeof calendar === "undefined" || calendar === null) {
                        receivedElement.innerHTML = 'calendar not defined!';
                    } else {
                        receivedElement.innerHTML = 'calendar ready!';

                        var startDate = new Date("September 24, 2013 13:00:00");
                        var endDate = new Date("September 24, 2013 14:30:00");
                        var title = "My nice event";
                        var location = "Home";
                        var notes = "Some notes about this event.";
                        var success = function(message) { receivedElement.innerHTML = 'cal good:' + JSON.stringify(message) };
                        var error = function(message) { receivedElement.innerHTML = 'cal failed:' + JSON.stringify(message) };


                        calendar.createEvent(title,location,notes,startDate,endDate,success,error);

                    }

            }

        }


        console.log('Received Event: ' + id);
    }
};
