export function check(str: string) {
  return /^(\*\*|[*]&)/.test(str);
}

export function replaceHeadingStars(str: string) {
  return str.replace(/^(\*)(\*)|(\*)$/g, "");
}