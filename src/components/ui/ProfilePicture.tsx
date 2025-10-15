import { cn } from "@/lib/utils";

interface ProfilePictureProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export const ProfilePicture = ({
  src,
  alt,
  className,
  fallback,
}: ProfilePictureProps) => {
  return (
    <div className={cn(
      "relative h-28 w-28 md:h-32 md:w-32 rounded-2xl bg-muted overflow-hidden border-2 border-border group-hover:border-primary/30 transition-all flex-shrink-0",
      className
    )}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            if (fallback) {
              e.currentTarget.src = fallback;
            } else {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.classList.add('bg-muted-foreground/10');
            }
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-muted-foreground/10">
          <span className="text-muted-foreground/50 text-sm">
            {alt.split(' ').map(n => n[0]).join('').toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
};
