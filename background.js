chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "downloadText") {
        const blob = new Blob([message.text], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        chrome.downloads.download({
            url: url,
            filename: 'email_content.txt'
        });
    }
});
