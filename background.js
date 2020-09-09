chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log(details);
    // 現在のタブを取得する
    chrome.tabs.query({
      active: true,
      windowId: chrome.windows.WINDOW_ID_CURRENT
    }, (result) => {
      var currentTab = result.shift();
      // 取得したタブに対してメッセージを送る
      if (!currentTab) return 
      chrome.tabs.sendMessage(currentTab.id, details, () => {});
    });
  },
  {urls: ['https://translate.googleapis.com/*']},
  []
);
