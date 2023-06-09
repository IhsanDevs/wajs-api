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
import { ContactModel } from '../models';
import { BaseCollection } from './BaseCollection';
/** @whatsapp 19380
 * @whatsapp 719380 >= 2.2222.8
 */
export declare class ContactCollection extends BaseCollection<ContactModel> {
    static model: ContactModel;
    checksum?: any;
    ensureSorted(): any;
    contactAdded(e?: any): any;
    contactRemoved(e?: any): any;
    contactHashLength(): any;
    isFilteredContact(e?: any): boolean;
    getFilteredContacts(): any;
    sync(): any;
    updateFrequentContacts(e?: any): any;
    frequentContacts(e?: any, t?: any): any;
    getUserCount(): any;
    setChecksum(e?: any): any;
    resolveWidsFromHash(e?: any): any;
    static comparator(): any;
}
