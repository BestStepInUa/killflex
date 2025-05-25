'use client';

import { IMediaPage } from "./types/IMediaPage.types";

export function MediaPage({mediaItem}: IMediaPage) {
    return (
    <div>
        <h1>{mediaItem.title}</h1>
    </div>
    )
}