import { IEpisodes } from "./types/IMediaPage.types";
import { useState } from "react";
import Image from "next/image";
import * as m from "motion/react-m"
import { episodes } from "@/media/episodes.data";
import { episodesAnimation, episodeAnimation } from "./animation";

export function Episodes({ mediaItem }: IEpisodes) {
    const [currentSeason, setCurrentSeason] = useState(mediaItem.seasons[0])

    return (
    <div className="px-8 py-6">
        <m.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}            
            className="flex items-center">
            <h2 className="pr-2 border-r border-r-slate-400/30 text-lg font-medium">Episodes</h2>
            <div className="opacity-50 text-sm ml-2">{currentSeason.title}</div>
        </m.div>

        <m.div 
            variants={episodesAnimation}
            initial="hidden"
            animate="visible"            
            className="grid grid-cols-6 gap-6 mt-3.5"
        >
            {currentSeason.episodes.map((episode) => (
                <m.div key={episode.id}
                    variants={episodeAnimation}
                >
                    <Image
                        src={episode.poster}
                        alt={episode.title}
                        width={243}
                        height={136}
                        className="rounded-lg"
                        draggable={false}
                    />
                    <div  className="flex items-center gap-2 text-sm mt-2">
                        <div>{episode.title}</div>
                        <div className="opacity-50">• {episode.duration}m</div>
                    </div>
                </m.div> 
            ))}
        </m.div>
    </div>
    )
}