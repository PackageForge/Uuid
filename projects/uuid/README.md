# @packageforge/uuid

TypeScript functions to generate UUIDs, extract UUIDs, and compare UUIDs to see if they are equal.

Add the package to your project on the command line:
```
npm install @packageforge/uuid --save
```

Import the `generateUuid`, `extractUuid`, and `uuidsEqual` functions into your code file:
```typescript
import { generateUuid, uuidsEqual, extractUuid } from '@packageforge/uuid';
```

To generate a UUID:

```typescript
uuid = generateUuid();
```

To compare two UUIDs anywhere in strings:

```typescript
console.log(uuidsEqual('this lowercase uuid: 5c3cd7f2-979e-4b86-9123-11e6817271d2', 'this uppercase uuid: 5C3CD7F2-979E-4B86-9123-11E6817271D2')); 
// true, case insensitive comparison.

console.log(uuidsEqual('no uuid!', 'no uuid here either!')); 
// false, no uuids to compare
```

To extract a UUID from a string:

```typescript
uuid = extractUuid('this is a uppercase uuid: 5C3CD7F2-979E-4B86-9123-11E6817271D2');
console.log(uuid);
// 5C3CD7F2-979E-4B86-9123-11E6817271D2
// note was left in original case form

uuid = extractUuid('this is a mixed case uuid: 5C3CD7F2-979e-4B86-9123-11e6817271d2', false);
console.log(uuid);
// 5c3cd7f2-979e-4b86-9123-11e6817271d2
// note was converted to lowercase
```
