export function extractUuid(value: string | null | undefined, originalForm: boolean = true): string | undefined {
  if (typeof (value) === "string" && value.search(/([0-9a-f]{8}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{12})/i) >= 0)
    return originalForm ? RegExp.$1 : RegExp.$1.toLowerCase();
  return;
}