import { PropsWithChildren } from "react";

interface MainSectionProps extends PropsWithChildren {
  className?: {
    container?: string;
    content?: string;
  };
}
export function MainSection({className, children}:MainSectionProps) {
  return (
    <section className={`w-full py-16 px-5 ${className?.container}`}>
      <div className={`w-full max-w-[1400px] mx-auto ${className?.content}`}>
        {children}
      </div>
    </section>
  );
}
