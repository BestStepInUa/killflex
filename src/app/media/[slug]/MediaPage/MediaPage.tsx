'use client';

import { IMediaPage } from "./types/IMediaPage.types";
import { getImageProps } from "next/image";
import { getBackgroundImage } from "@/utils/get-background-image";
import { MediaDetails } from "./MediaDetails";
import { Products } from "./Products";
import { CSSProperties } from "react";

export function MediaPage({mediaItem}: IMediaPage) {
    const {
    props: { srcSet },
  } = getImageProps({ alt: '', width: 1282, height: 540, src: mediaItem.backdrop });
  const backgroundImage = getBackgroundImage(srcSet)
  const style:CSSProperties = { height: 540, width: '100%', backgroundImage }

    return (
    <div>
        <div style={style} className="bg-center bg-cover bg-no-repeat absolute top-0 left-0 z-0">            
            <div className="absolute w-full bottom-0 left-0 z-1 p-8 flex items-end justify-between">
                <MediaDetails mediaItem={mediaItem}/>            
                <Products /> 
            </div>                                  
        </div>        
    </div>
    )
}