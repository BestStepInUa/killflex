import { IMediaItem } from "@/app/Carousel/types/IMediaItem.types.";
import { seasons } from "./seasons.data";

export const mediaData: IMediaItem[] = [
    {
        id: 1,
        title: "Loki",
        slug: "loki",
        year: 2021,
        rating: 8.2,
        poster: "/posters/loki.webp",
        genres: ["Action", "Adventure", "Fantasy"],
        seasons 
    },
    {   id: 2,
        title: "The Morning Show",
        slug: "the-morning-show",  
        year: 2019,    
        rating: 8.1,
        poster: "/posters/the-morning-show.webp",
        genres: ["Drama"],
        seasons
    },
    {
        id: 3,
        title: "You",
        slug: "you", 
        year: 2018,
        rating: 7.7,
        poster: "/posters/you.webp",
        genres: ["Drama", "Thriller", "Romance"],
        seasons
    },
    {
        id: 4,
        title: "Stranger Things",
        slug: "stranger-things",
        year: 2016,
        rating: 8.6,
        poster: "/posters/stranger-things.webp",
        genres: ["Drama", "Fantasy", "Horror"],
        seasons  
    },
    {
        id: 5,
        title:  "Bridgerton",
        slug: "bridgerton",
        year: 2020,
        rating: 7.4,
        poster: "/posters/bridgerton.webp",
        genres: ["Drama", "Romance"],
        seasons
    },
    {
        id: 6,
        title: "Emily in Paris",
        slug: "emily-in-paris",
        year: 2020,
        rating: 6.8,
        poster: "/posters/emily-in-paris.webp",
        genres: ["Comedy", "Drama", "Romance"],
        seasons
    },
    {
        id: 7,
        title: "The Boys",
        slug: "the-boys",
        year: 2019,
        rating: 8.6,
        poster: "/posters/the-boys.webp",
        genres: ["Action", "Comedy", "Crime"],
        seasons
    },
    {
        id: 8,
        title: "The Mandalorian",
        slug: "the-mandalorian",
        year: 2019,
        rating: 8.6,
        poster: "/posters/the-mandalorian.webp",
        genres: ["Action", "Adventure", "Fantasy"],
        seasons
    },
    {
        id: 9,
        title: "Peaky Blinders",
        slug: "peaky-blinders",
        year: 2013,
        rating: 8.7,
        poster: "/posters/peaky-blinders.webp",
        genres: ["Crime", "Drama"],
        seasons        
    },
    {
        id: 10,
        title: "Reacher",
        slug: "reacher",
        year: 2022,
        rating: 8.0,
        poster: "/posters/reacher.webp",
        genres: ["Action", "Adventure", "Crime"],
        seasons
    },
    {
        id: 11,
        title: "Breaking Bad",
        slug: "breaking-bad",
        year: 2008,
        rating: 9.5,
        poster: "/posters/breaking-bad.webp",
        genres: ["Crime", "Drama", "Thriller"],
        seasons
    },
    {
        id: 12,
        title: "Westworld",
        slug: "westworld",
        year: 2016,
        rating: 8.4,
        poster: "/posters/westworld.webp",
        genres: ["Drama", "Mystery", "Sci-Fi"],
        seasons   
    }
]