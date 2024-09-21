import Marquee from '@components/magicui/marquee';
import { cn } from '@lib/utils';


const techIcons = [
  {
    img: "public/icons/js.svg",
  },
  {
    img: "public/icons/typescript.svg",
  },
  {
    img: "public/icons/angular.svg",
  },
  {
    img: "public/icons/ngrx.svg",
  },
  {
    img: "public/icons/react.svg",
  },
  {
    img: "public/icons/nextjs.svg",
  },
  {
    img: "public/icons/astro.svg",
  },
  {
    img: "public/icons/threejs.svg",
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
        "relative cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
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
        <h4 className="text-base-500 dark:text-base-700 text-base pl-14">TECHS I ❤️</h4>
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-black"></div>
    </div>
  );
}