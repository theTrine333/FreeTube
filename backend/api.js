export async function suggestVideos() {
  const url =
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "5f125d47b5msh95ee3b6fff88387p1dd077jsn08737d52e5c7",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.items[0]);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}
