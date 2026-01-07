export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      {/* Radial Gradient for spotlight effect */}
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)]" />
    </div>
  );
}
