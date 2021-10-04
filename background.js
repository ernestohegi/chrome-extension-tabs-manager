async function getCurrentTab() {
  let queryOptions = { currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);

  tabs.map(({ title, url }) => {
    console.log(title, url);
  })
}

chrome.action.onClicked.addListener((tab) => {
  getCurrentTab()
});
