import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export function PageHeader({
  title,
  description,
  icon,
  imageSrc,
  imageAlt,
}: PageHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      {imageSrc ? (
        <div className="size-16 rounded-lg overflow-hidden shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={64}
            height={64}
            className="size-full object-cover"
          />
        </div>
      ) : icon ? (
        <div className="size-16 rounded-lg bg-muted flex items-center justify-center shrink-0 [&_svg]:size-7">
          {icon}
        </div>
      ) : null}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
