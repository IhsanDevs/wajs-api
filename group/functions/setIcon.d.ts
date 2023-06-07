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
 * Set the group icon (group profile picture)
 *
 * @example
 * ```javascript
 * await WPP.group.setIcon('[group@g.us]', 'data:image/jpeg;base64,.....');
 * ```
 *
 * @category Group
 */
export declare function setIcon(groupId: string | Wid, content: string): Promise<{
    eurl: string;
    status: number;
    tag: string;
    token: string;
    _duplicate: boolean;
}>;