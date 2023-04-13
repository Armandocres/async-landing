const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCNEgeHI1wpoCwXZGKpwusIg&part=snippet%2Cid&order=date&maxResults=9';
const content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e22935f10mshb360f3db38794bfp13e10djsn1413f5680836',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetData(urlApi) {
  const resp = await fetch(urlApi, options);
  const data = await resp.json();
  return data;
}

(async () => {
  try {
    const videos = await fetData(API);
    console.log(videos);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}
      `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error)
  }
})();