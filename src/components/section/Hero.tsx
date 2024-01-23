interface Props {
  imageSrc: string;
  footer?: boolean;
  children: React.ReactNode;
}

export default function Hero({ imageSrc, footer, children }: Props) {
  return (
    <section
      className="h-screen md:h-[35rem] bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="flex flex-col items-center h-full w-full bg-primary-darkBlue/70">
        {children}
        {footer && (
          <div className="p-4">
            <a href="#" className="nav text-xl font-bold text-center">
              ACESSE O BLOG
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
