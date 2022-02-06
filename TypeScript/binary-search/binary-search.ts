export function find(
  haystack: number[],
  needle: number,
  start = 0,
  end = haystack.length - 1,
): number | never {
  const middle = Math.floor((end - start) / 2 + start);

  if (start <= end) {
    if (haystack[middle] === needle) {
      return middle;
    } else if (haystack[middle] < needle) {
      return find(haystack, needle, middle + 1, end);
    } else if (haystack[middle] > needle) {
      return find(haystack, needle, start, middle - 1);
    }
  } else {
    throw new Error('Value not in array');
  }

  return -1;
}
