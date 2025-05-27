import { IMediaPage } from "./types/IMediaPage.types";

export function MediaDetails({ mediaItem }: IMediaPage) {
    return (
        <div>
            <div className="flex items-center gap-3 mb-2">
                {mediaItem.genres.map(genre => (
                    <div key={genre} className="text-white bg-neutral-900/50 rounded text-xs px-2 py-1 shadow-lg">
                        {genre}
                    </div>))}                    
            </div>
            <h1 
                className="text-6xl font-bold text-white mb-4"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }}
                >{mediaItem.title}
            </h1>
            <div className="flex items-center gap-6">
                <div 
                    className="text-white font-semibold text-2xl"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >KillFlex
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-secondary rounded font-semibold text-black text-sm py-0.5 px-2">
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