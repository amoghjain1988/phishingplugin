
console.log('\n Starting content.js')

function extractData() {
    const div = document.querySelector('.nH.bkK');
    if (div) {
        const textContent = div.textContent.trim();
        // Send data to background script
        chrome.runtime.sendMessage({ action: "downloadText", text: textContent });
    }
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "extractDataFromEmail") {
        console.log('Extracting Data');
        extractData();
    }
});