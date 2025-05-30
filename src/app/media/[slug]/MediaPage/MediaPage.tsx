'use client';

import { IMediaPage } from "./types/IMediaPage.types";
import { getImageProps } from "next/image";
import { getBackgroundImage } from "@/utils/get-background-image";
import { MediaDetails } from "./MediaDetails";
import { Products } from "./Products";
import { CSSProperties } from "react";
import { Episodes } from "./Episodes";
import * as m from "motion/react-m"

export function MediaPage({mediaItem}: IMediaPage) {
    const {
    props: { srcSet },
  } = getImageProps({
    alt: '',
    width: 1282,
    height: 540,
    src: mediaItem.backdrop,
    priority: true,
    quality: 100
 });
  const backgroundImage = getBackgroundImage(srcSet)
  const style: CSSProperties = {
    height: 540,
    width: '100%',
    backgroundImage,
    transformStyle: "preserve-3d"
  }    

    return (    
      <div        
        style={{
          perspective: "1500px"
        }}
      >
        <m.div
          initial={{
            clipPath: "inset(6.5% 40.5% round 20px)",
            rotateX: -85,
            opacity: 0.3,
            translateY: 230            
          }}
          animate={{
            clipPath: "inset(0% 0% 0% 0%)",
            rotateX: 0,
            opacity: 1,
            translateY: 0            
          }}
          transition={{            
            type: "keyframes",
            duration: 1,
            ease: "easeInOut"
          }}            
          style={style}
          className="bg-center bg-cover bg-no-repeat relative -mt-25 left-0 z-0"
        >            
          <div className="absolute w-full bottom-0 left-0 p-8 flex items-end justify-between z-1">
            <MediaDetails mediaItem={mediaItem}/>            
            <Products /> 
          </div>                                  
        </m.div>
        <Episodes mediaItem={mediaItem} />
      </div>                  
    )
}