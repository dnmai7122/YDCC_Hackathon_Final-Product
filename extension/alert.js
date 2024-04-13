async function alert_cyper(){
    let[tab] = await chrome.tabs.querry({active: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            alert('Alert: You may be at risk of a cyber attack!!!')
        }
    })
}