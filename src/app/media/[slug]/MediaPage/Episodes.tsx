import { useState } from "react";
import { IEpisodes } from "./types/IMediaPage.types";
import Image from "next/image";

export function Episodes({ mediaItem }: IEpisodes) {
    const [currentSeason, setCurrentSeason] = useState(mediaItem.seasons[0])

    return (
    <div className="px-8 py-6">
        <div className="flex items-center">
            <h2 className="pr-2 border-r border-r-slate-400/30 text-lg font-medium">Episodes</h2>
            <div className="opacity-50 text-sm ml-2">{currentSeason.title}</div>
        </div>

        <div className="grid grid-cols-6 gap-6 mt-3.5">
            {currentSeason.episodes.map((episode) => (
                <div key={episode.id}>
                    <Image 
                        src={episode.poster}
                        alt={episode.title}
                        width={243}
                        height={136}
                        className="rounded-lg"
                    />
                    <div  className="flex items-center gap-2 text-sm mt-2">
                        <div>{episode.title}</div>
                        <div className="opacity-50">• {episode.duration}m</div>
                    </div>
                </div> 
            ))}
        </div>
    </div>
    )
}