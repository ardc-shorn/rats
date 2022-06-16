import fetch from "node-fetch";

const apiBase = "https://api.raid.org.au/v1";

export async function getRoot(): Promise<any> {
  const response = await fetch(`${apiBase}/`, {
    method: "GET",
  });
  console.log("got", response);
  
  return "";
}