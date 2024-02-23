export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '091bb39efbmsh8c73cb23d36fd0fp184ec2jsn9873438082c3',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
export const YToptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '091bb39efbmsh8c73cb23d36fd0fp184ec2jsn9873438082c3',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData= async(url,options) =>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}