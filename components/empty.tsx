import Image from "next/image";

interface EmptyProps {
  label: string;
}

function Empty({ label }: EmptyProps) {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72 rounded-lg overflow-hidden">
        <Image alt="empty" fill src="/empty.png" />
      </div>
      <div className="text-muted-foreground text-sm text-center">{label}</div>
    </div>
  );
}

export default Empty;