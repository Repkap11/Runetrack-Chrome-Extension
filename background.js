var lastRequestId;
chrome.webRequest.onBeforeRequest.addListener(
  function(request) {
    console.log(request.url);

    newURL = request.url.replace("http://runetrack.com/forums/images/runetrack_banner.jpg", chrome.extension.getURL("images/forum_banner.jpg"));
    newURL = newURL.replace("http://runetrack.com/images/", chrome.extension.getURL("images/"));
    return { 
      redirectUrl : newURL
    };
  }, 
  {
      urls : ["*://*.runetrack.com/images/*","*://*.runetrack.com/forums/images/*"]
  }, 
  ["blocking"]
);
console.log("Listener Set");




