'use strict';
var connection, socket;

$("#notifier_circle").width(0.8*window.innerWidth);
$("#notifier_circle").height(0.8*window.innerWidth);

    try{
        //Connect to the Galileo Server
        socket = io.connect("http://192.168.1.148:1337");

        //Attach a 'connected' event handler to the socket
        socket.on("connected", function(message){
            navigator.notification.alert(
                    'Welcome',  // message
                    "",                     // callback
                    'Hi There!',            // title
                    'Ok'                  // buttonName
                );
        });
        
        socket.on("message", function(message){
            //alert("Is anyone there? "+message);
            if (message == "present"){
                $("#notifier_circle").attr("class","green");
                //Update log
                $("#feedback_log").append(Date().substr(0, 21)+" Someone is Present!<br>")
                //Prompt user with Cordova notification alert
                navigator.notification.alert(
                    'Someone is Present!',  // message
                    "",                     // callback
                    'Check Your Door',            // title
                    'Ok'                  // buttonName
                );
                //Wait 2 seconds then turn back to gray
                setTimeout(function(){
                        $("#notifier_circle").attr("class","gray")
                                     }, 3000);
            }
        });
    }
    catch(e){
        alert("Connection Error: Server Not Available");
    }