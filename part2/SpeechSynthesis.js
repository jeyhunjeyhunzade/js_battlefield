if ("speechSynthesis" in window) {
  var speech = new SpeechSynthesisUtterance("Hello World!");
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}
