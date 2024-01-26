import Link from "next/link";

interface Props {
  imageSrc: string;
  footer?: boolean;
  screen?: boolean;
  children: React.ReactNode;
}

export default function Hero({ imageSrc, footer, screen, children }: Props) {
  return (
    <section
      className={`${screen && 'h-screen'} lg:h-[35rem] bg-no-repeat bg-cover bg-bottom"`}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="flex flex-col items-center h-full w-full bg-primary-darkBlue/70">
        {children}
        {footer && (
          <div className="p-4">
            <Link href="/blog" className="nav text-xl font-bold text-center">
              ACESSE O BLOG
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
