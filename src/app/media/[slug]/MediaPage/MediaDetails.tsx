import { IMediaPage } from "./types/IMediaPage.types";

export function MediaDetails({ mediaItem }: IMediaPage) {
    return (
        <div>
            <div className="flex items-center gap-5">
                {mediaItem.genres.map(genre => (
                    <div key={genre} className="text-white bg-white/10 rounded text-xs px-2 py-1">
                        {genre}
                    </div>))}                    
            </div>
            <h1 className="text-5xl font-bold text-white mb-1">{mediaItem.title}</h1>
            <div className="flex items-center gap-2">
                <div className="text-red-500 font-semibold">KillFlex</div>
                <div>
                    <div className="bg-secondary text-black text-sm py-1 px-2">
                        IMDb
                    </div>
                    <div className="text-white">
                        {mediaItem.rating.toFixed(1)}/10
                    </div>
                </div>                    
            </div>                
        </div>
    );
}