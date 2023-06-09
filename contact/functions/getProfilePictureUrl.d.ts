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
import { Wid } from '../../whatsapp';
/**
 * Get the current text status
 *
 * @example
 * ```javascript
 * const url = await WPP.contact.getProfilePictureUrl('[number]@c.us');
 * ```
 *
 * @category Chat
 */
export declare function getProfilePictureUrl(contactId: string | Wid, full?: boolean): Promise<string | null | undefined>;
