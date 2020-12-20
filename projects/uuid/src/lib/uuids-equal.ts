import { extractUuid } from './extract-uuid';

export function uuidsEqual(uuid1: string | null | undefined, uuid2: string | null | undefined): boolean {
  return (uuid1 = extractUuid(uuid1, false)) !== undefined && uuid1 === extractUuid(uuid2, false);
}
