document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello Bulma!");
});

const openCall = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get("token");

  const domain = "meet.indaiatuba.sp.gov.br";
  const options = {
    roomName: "SalusP2P",
    width: "100%",
    height: 700,
    jwt: "biwsbj11c3Jfc2FsdXMscj1lMTk1MDhiNWYxNmM1ZDkyOTQ4NDQ3Yzc4MWNmNzJiYQ==",
    parentNode: document.querySelector("#meet"),
  };
  const api = new JitsiMeetExternalAPI(domain, options);
  // api.addEventListener("passwordRequired ", () => {
  //   api.executeCommand("password", token);
  // });

  // api.addEventListener("videoConferenceJoined", (response) => {
  //   api.executeCommand("password", token);
  // });
};
