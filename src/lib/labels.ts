export const statusLabel = {
  live: 'live',
  prototype: 'working prototype',
  'in-progress': 'in progress',
  research: 'research',
} as const;

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
