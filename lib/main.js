"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello Bulma!");
});

var openCall = function openCall() {
  var searchParams = new URLSearchParams(window.location.search);
  var token = searchParams.get("token");

  var domain = "meet.indaiatuba.sp.gov.br";
  var options = {
    roomName: "SalusP2P",
    width: "100%",
    height: 700,
    jwt: "biwsbj11c3Jfc2FsdXMscj1lMTk1MDhiNWYxNmM1ZDkyOTQ4NDQ3Yzc4MWNmNzJiYQ==",
    parentNode: document.querySelector("#meet")
  };
  var api = new JitsiMeetExternalAPI(domain, options);
  // api.addEventListener("passwordRequired ", () => {
  //   api.executeCommand("password", token);
  // });

  // api.addEventListener("videoConferenceJoined", (response) => {
  //   api.executeCommand("password", token);
  // });
};