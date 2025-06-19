const ENDPOINT='https://YOUR_BACKEND_URL/api/consensus';
const THROTTLE=60000;
async function fetchConsensus(){try{const r=await fetch(ENDPOINT);const j=await r.json();await chrome.storage.local.set({consensus:j});}catch(e){console.error(e);}}
setInterval(fetchConsensus,THROTTLE);fetchConsensus();