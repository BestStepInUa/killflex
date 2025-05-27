import { IMediaPage } from "./types/IMediaPage.types";
import * as m from "motion/react-m"

export function MediaDetails({ mediaItem }: IMediaPage) {
    return (
        <div>
            <m.div 
                initial={{ opacity: 0, y:  10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-2">
                {mediaItem.genres.map(genre => (
                    <div key={genre} className="text-white bg-neutral-900/50 rounded text-xs px-2 py-1 shadow-lg">
                        {genre}
                    </div>))}                    
            </m.div>
            <m.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }} 
                className="text-6xl font-bold text-white mb-3.5"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }}
                >{mediaItem.title}
            </m.h1>
            <m.div 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex items-center gap-6">
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
            </m.div>                
        </div>
    );
}