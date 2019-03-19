export function truncate(str, limit = 12) {
  return str.length > limit ? `${str.substring(0, limit).trim()}…` : str
}