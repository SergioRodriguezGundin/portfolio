import Marquee from '@components/magicui/marquee';
import { cn } from '@lib/utils';


const techIcons = [
  {
    img: "icons/js.svg",
  },
  {
    img: "icons/typescript.svg",
  },
  {
    img: "icons/angular.svg",
  },
  {
    img: "icons/ngrx.svg",
  },
  {
    img: "icons/react.svg",
  },
  {
    img: "icons/nextjs.svg",
  },
  {
    img: "icons/astro.svg",
  },
  {
    img: "icons/threejs.svg",
  },
];

const firstRow = techIcons.slice(0, techIcons.length / 2);
const secondRow = techIcons.slice(techIcons.length / 2);

const ReviewCard = ({
  img,
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl shadow-md border p-4",
        "bg-neutral-200 border-neutral-300 hover:bg-neutral-950/[.05]",
        "dark:bg-neutral-900 dark:border-neutral-800 dark:hover:bg-neutral-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img width="32" height="32" alt="" src={img} />
      </div>
    </figure>
  );
};

export function Techs({ containerWidth }: { containerWidth: number } = { containerWidth: 390 }) {
  const width = containerWidth ? containerWidth : 390;

  return (
    <div className={`relative flex flex-col justify-center items-start overflow-hidden w-[${width}px] h-full`}>
      <div className='flex flex-col gap-2'>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard {...review} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
    </div>
  );
}