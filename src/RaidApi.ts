import fetch, {Response, RequestInfo, RequestInit} from "node-fetch";

const apiBase = "https://api.raid.org.au/v1";

export async function getRoot(): Promise<any> {
  return await apiFetchJson(`${apiBase}/`, {
    method: "GET",
  });
}

const delay = 200;
let lastSent = new Date().getTime();

/*
I have no idea what this is going to do for parallel requests :|

 IMPROVE: way too dumb, but it'll do for now
*/
async function apiFetchJson(
  url: RequestInfo,
  init?: RequestInit
): Promise<any>{
  const nextAllowed = lastSent + delay;
  const now = new Date().getTime();
  
  if( now < nextAllowed ){
    const sleepTime = nextAllowed - now;
    console.log(`request rate-limit, sleep ${sleepTime}ms for ${url}`);
    await sleep(sleepTime);
    console.log(`request rate-limit, awake for ${url}`);
  }

  const response: Response = await fetch(url, init);
  if( response.status === 429 ){
    console.log("API 429", response);
    throw new Error("API gave too many requests error");
  }
  if( !response.ok ){
    console.log("API not ok", response);
    throw new Error("API returned error - " + response.statusText);
  }
  
  return await response.json();
}

async function sleep(sleepMs: number){
  return new Promise(resolve => setTimeout(resolve, sleepMs));
}
