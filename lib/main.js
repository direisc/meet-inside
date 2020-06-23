"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello Bulma!");
});

var openCall = function openCall() {
  var roomName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "teste";
  var token = arguments[1];
  var roomPassword = arguments[2];
  var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 426;
  var height = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 240;
  var id = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "#meet";

  // const searchParams = new URLSearchParams(window.location.search);
  // const token = searchParams.get("token");
  // https://meet.indaiatuba.sp.gov.br/2c434d77-d98f-4873-a1fd-d8ff0b65021d#jitsi_meet_external_api_id=0&config.defaultLanguage=%22ptBR%22
  var domain = "meet.indaiatuba.sp.gov.br";
  var options = {
    roomName: roomName,
    width: width,
    height: height,
    parentNode: document.querySelector("#meet"),
    jwt: token,
    configOverwrite: {
      defaultLanguage: "ptBR",
      disableDeepLinking: true
    }
  };
  var api = new JitsiMeetExternalAPI(domain, options);
  // api.addEventListener("passwordRequired ", () => {
  //   api.executeCommand("password", token);
  // });

  // api.addEventListener("videoConferenceJoined", (response) => {
  //   api.executeCommand("password", token);
  // });
};