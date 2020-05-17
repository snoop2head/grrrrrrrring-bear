// alert("grrrrrrr");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // regular expression rule
  const re = new RegExp("bear", "gi");
  // yield matches corresponding to the regular expression rule
  const matches = document.documentElement.innerHTML.match(re);
  sendResponse({ count: matches.length });
});
