document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello Bulma!");
});

const openCall = (
  roomName = "teste",
  token,
  roomPassword,
  width = 426,
  height = 240,
  id = "#meet"
) => {
  // const searchParams = new URLSearchParams(window.location.search);
  // const token = searchParams.get("token");
  // https://meet.indaiatuba.sp.gov.br/2c434d77-d98f-4873-a1fd-d8ff0b65021d#jitsi_meet_external_api_id=0&config.defaultLanguage=%22ptBR%22
  const domain = "meet.indaiatuba.sp.gov.br";
  const options = {
    roomName: roomName,
    width: width,
    height: height,
    parentNode: document.querySelector("#meet"),
    jwt: token,
    configOverwrite: {
      defaultLanguage: "ptBR",
      disableDeepLinking: true,
    },
  };
  const api = new JitsiMeetExternalAPI(domain, options);
  // api.addEventListener("passwordRequired ", () => {
  //   api.executeCommand("password", token);
  // });

  // api.addEventListener("videoConferenceJoined", (response) => {
  //   api.executeCommand("password", token);
  // });
};
