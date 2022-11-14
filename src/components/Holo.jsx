import { useEffect, useState } from "react"

const Holo = () => {
    const [vtuber, setVtuber] = useState([]);
    const [keyword, setKeyword] = useState("");
    const api = `https://api.holotools.app/v1/`;
    
    const searchVtuber = async() => {
        const response = await fetch(api+`channels?name=${keyword}`);
        const json = await response.json();
        setVtuber(json.channels);
    };

    useEffect(() => {
        searchVtuber()
    }, [keyword])

    return (
        <div>
            <input
                type="search"
                placeholder="Search VTuber"
                onChange={(e) => setKeyword(e.target.value)}
                className="my-8 mx-auto block placeholder:text-center border border-slate-400 shadow-lg rounded-lg p-1"
            />
            <div className="max-w-lg text-center mx-auto">
            {vtuber && vtuber.length > 0 ? vtuber.map((vtuber, index) => (
                <div className="vtuber mb-5" key={vtuber.id}>
                    <img src={vtuber.photo} alt="profileName" width="130px" className="rounded-lg mx-auto"/>
                    <a href={"https://youtube.com/channel/"+vtuber.yt_channel_id} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-sky-300 to-sky-600 bg-clip-text text-transparent underline text-xl transition-all hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-400">{vtuber.name}</a>
                    <br/>
                    <a href={"https://twitter.com/"+vtuber.twitter_link} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-rose-600 to-lime-600 bg-clip-text text-transparent underline transition-all hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-400">Twitter: {vtuber.twitter_link}</a>
                </div>
            )) : null}
            </div>
        </div>
    )
}

export default Holo