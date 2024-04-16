export default function ArenaLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <body>{children}</body>;
}
