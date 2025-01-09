if (typeof browser !== "undefined") {
  const browser = require("webextension-polyfill");

  browser.runtime.onMessage.addListener((message) => {
    console.log("background: onMessage", message);
    return Promise.resolve("Dummy response to keep the console quiet");
  });
} else {
  console.log("Not running in a browser extension context");
}
