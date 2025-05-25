import type { Metadata } from 'next'
import { MediaPage } from "./MediaPage/MediaPage";
import { mediaData } from "@/media/media.data";
import { notFound } from "next/navigation";


export async function generateMetadata(props: {
    params: Promise<{slug: string}>
}): Promise<Metadata> {  
        const params = await props.params
        const { slug } = params
 
        const mediaItem = mediaData.find(mediaItem => mediaItem.slug === slug)

        if(!mediaItem) {
              notFound()
        }
  
        return {
            title: mediaItem.title    
        }
    }
    
export default async function Page(props: {
    params: {slug: string}
}) {
    const params = props.params
    const { slug } = params

    const mediaItem = mediaData.find(mediaItem => mediaItem.slug === slug)

    if(!mediaItem) {
        notFound()
    }

    return <MediaPage mediaItem={mediaItem}/>
}