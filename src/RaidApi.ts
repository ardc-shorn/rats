const apiBase = "https://api.raid.org.au/v1";
import fetch from "node-fetch";

export async function getRoot(): Promise<any> {
  const response = await fetch(`${apiBase}/`, {
    method: "GET",
  });
  console.log("got", response);
  
  return "";
}