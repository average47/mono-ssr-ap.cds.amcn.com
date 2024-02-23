export function HTMLComment({ text }: { text: string }) {
  return <span dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }>;
}
