export function formattedTime({ from, to }: { from: number; to: number }) {
  function convertTime(time: number): string {
    const d = new Date(time * 1000);
    const h = d.getHours();
    const m = '0' + d.getMinutes();

    return h + ':' + m.slice(-2);
  }
  const start = convertTime(from);
  const end = convertTime(to);

  return { start, end };
}
