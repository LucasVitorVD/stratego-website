"use client";

import { CountUp } from "use-count-up";
import { useInView } from "react-intersection-observer";

interface Props {
  end: number;
  duration?: number;
  highlight?: boolean;
  plusIcon?: boolean;
}

export default function Counter({
  end,
  duration = 3,
  highlight,
  plusIcon,
}: Props) {
  const { inView, ref } = useInView({
    threshold: 0.2,
  });

  return (
    <span
      data-highlight={highlight}
      className="data-[highlight=true]:text-highlightYellow text-6xl font-bold"
      ref={ref}
    >
      {plusIcon && <span>+</span>}
      {inView && <CountUp isCounting={true} start={0} end={end} duration={duration} />}
    </span>
  );
}
