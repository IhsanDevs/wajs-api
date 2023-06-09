/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Fetch preview link data from a remote server
 */
export declare function fetchRemoteLinkPreviewData(url: string): Promise<{
    title: any;
    description: any;
    canonicalUrl: any;
    matchedText: string;
    richPreviewType: number;
    doNotPlayInline: boolean;
    imageUrl: any;
} | null>;
/**
 * Generate the preview link thumbnail data
 */
export declare function generateThumbnailLinkPreviewData(url: string): Promise<{
    thumbnail: unknown;
    thumbnailHQ: string;
    mediaKey: any;
    mediaKeyTimestamp: any;
    thumbnailDirectPath: any;
    thumbnailSha256: string;
    thumbnailEncSha256: any;
    thumbnailWidth: number;
    thumbnailHeight: number;
} | null>;
