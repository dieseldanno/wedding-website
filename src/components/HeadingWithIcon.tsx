import Image from 'next/image';

interface HeadingWithIconProps {
  title: string;
  icon?: string;
  alt?: string;
  className?: string;
}

export default function HeadingWithIcon({
  title,
  icon,
  alt,
  className,
}: HeadingWithIconProps) {
  return (
    <div className="mb-4 text-center">
      {icon?.startsWith('/') && (
        <div className="mb-4 flex justify-center">
          <Image
            src={icon}
            alt={alt || title}
            width={120}
            height={120}
            className="h-35 w-35 object-contain opacity-90"
          />
        </div>
      )}
      <h2
        className={`text-custom-red font-lora text-3xl font-bold sm:text-4xl ${className}`}
      >
        {title}
      </h2>
    </div>
  );
}
