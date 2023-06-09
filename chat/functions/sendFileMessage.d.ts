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
import { SendMessageOptions, SendMessageReturn } from '..';
import { MessageButtonsOptions } from '.';
export interface FileMessageOptions extends SendMessageOptions {
    type?: string;
    caption?: string;
    footer?: string;
    filename?: string;
    mimetype?: string;
}
export interface AutoDetectMessageOptions extends FileMessageOptions {
    type: 'auto-detect';
}
/**
 * Send an audio message as a PTT, like a recorded message
 *
 * @example
 * ```javascript
 * // PTT audio
 * WPP.chat.sendFileMessage(
 *  '[number]@c.us',
 *  'data:audio/mp3;base64,<a long base64 file...>',
 *  {
 *    type: 'audio',
 *    isPtt: true // false for common audio
 *  }
 * );
 * ```
 */
export interface AudioMessageOptions extends FileMessageOptions {
    type: 'audio';
    isPtt?: boolean;
    /**
     * Send an audio message as a PTT with waveform
     *
     * @example
     * ```javascript
     * // Enable waveform
     * WPP.chat.sendFileMessage(
     *  '[number]@c.us',
     *  'data:audio/mp3;base64,<a long base64 file...>',
     *  {
     *    type: 'audio',
     *    isPtt: true,
     *    waveform: true // false to disable
     *  }
     * );
     * // Disable waveform
     * WPP.chat.sendFileMessage(
     *  '[number]@c.us',
     *  'data:audio/mp3;base64,<a long base64 file...>',
     *  {
     *    type: 'audio',
     *    isPtt: true,
     *    waveform: false
     *  }
     * );
     * ```
     */
    waveform?: boolean;
}
export interface DocumentMessageOptions extends FileMessageOptions, MessageButtonsOptions {
    type: 'document';
}
export interface ImageMessageOptions extends FileMessageOptions, MessageButtonsOptions {
    type: 'image';
    isViewOnce?: boolean;
}
export interface StickerMessageOptions extends FileMessageOptions {
    type: 'sticker';
}
export interface VideoMessageOptions extends FileMessageOptions, MessageButtonsOptions {
    type: 'video';
    isGif?: boolean;
}
/**
 * Send a file message, that can be an audio, document, image, sticker or video
 *
 * @example
 * ```javascript
 * // Single document
 * WPP.chat.sendFileMessage(
 *  '[number]@c.us',
 *  'data:application/msword;base64,<a long base64 file...>',
 *  {
 *    type: 'document',
 *    caption: 'My document', // Optional
 *    filename: 'myfile.doc', // Optional
 *    mimetype: 'application/msword' // Optional
 *  }
 * );
 *
 * // Image with view once
 * WPP.chat.sendFileMessage(
 *  '[number]@c.us',
 *  'data:image/jpeg;base64,<a long base64 file...>',
 *  {
 *    type: 'image',
 *    caption: 'My image', // Optional
 *    isViewOnce: true
 *  }
 * );
 *
 * // PTT audio
 * WPP.chat.sendFileMessage(
 *  '[number]@c.us',
 *  'data:audio/mp3;base64,<a long base64 file...>',
 *  {
 *    type: 'audio',
 *    isPtt: true // false for common audio
 *  }
 * );
 *
 * // Image with view buttons
 * WPP.chat.sendFileMessage(
 *  '[number]@c.us',
 *  'data:image/jpeg;base64,<a long base64 file...>',
 *  {
 *    type: 'image',
 *    caption: 'My image'
 *    buttons: [
 *      {
 *        id: 'your custom id 1',
 *        text: 'Some text'
 *      },
 *      {
 *        id: 'another id 2',
 *        text: 'Another text'
 *      }
 *    ],
 *    footer: 'Footer text' // Optional
 *  }
 * );
 *
 * // Image as Sticker
 * WPP.chat.sendFileMessage(
 *   '[number]@c.us',
 *   'data:image/png;base64,<a long base64 file...>',
 *   {
 *     type: 'sticker'
 *   }
 * );
 * ```
 * @category Message
 * @return  {SendMessageReturn} The result
 */
export declare function sendFileMessage(chatId: any, content: string | Blob | File, options: AutoDetectMessageOptions | AudioMessageOptions | DocumentMessageOptions | ImageMessageOptions | VideoMessageOptions | StickerMessageOptions): Promise<SendMessageReturn>;
