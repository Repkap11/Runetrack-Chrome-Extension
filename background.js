var lastRequestId;
chrome.webRequest.onBeforeRequest.addListener(
  function(request) {
    //console.log("Saw a request"+request.url);
    lastRequestId = request.requestId;
    newURL = request.url.replace("http://runetrack.com/images/banner_text.png", chrome.extension.getURL("images/site_banner_text.png"));
    newURL =  newURL.replace("http://runetrack.com/forums/images/runetrack_banner.jpg", chrome.extension.getURL("images/forum_banner.jpg"));
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




