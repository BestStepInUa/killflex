import { Variants } from "motion/react";

export const episodesAnimation: Variants = {
    hidden: { opacity: 0.5 },
    visible: { 
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            duration: 1,
            ease: "linear",
            delayChildren: 0.8
        }
    }
}

export const episodeAnimation: Variants = {
    hidden: { opacity: 0, x: 200 },
    visible: { 
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            type: "spring",
            bounce: 0.27
        }
    }
}