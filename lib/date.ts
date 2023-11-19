export function getFormattedDate(dateString: string) {
  const settanggal = {
    weekday: 'short' as const,
    day: 'numeric' as const,
    month: 'short' as const,
    year: 'numeric' as const,
  };
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', settanggal);
}