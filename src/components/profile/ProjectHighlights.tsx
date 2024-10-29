import Marquee from '@components/magicui/marquee';

const HighlightIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="hsl(var(--primary))" d="M695.4 164.1H470.8L281.2 491.5h157.4l-60.3 241l319.8-305.1h-211z"/><path fill="hsl(var(--color-700))" d="M848.1 359.3H627.8L825.9 109c4.1-5.3.4-13-6.3-13H436.1c-2.8 0-5.5 1.5-6.9 4L170.1 547.5c-3.1 5.3.7 12 6.9 12h174.4L262 917.1c-1.9 7.8 7.5 13.3 13.3 7.7L853.6 373c5.2-4.9 1.7-13.7-5.5-13.7M378.3 732.5l60.3-241H281.2l189.6-327.4h224.6L487.1 427.4h211z"/></svg>;
};

const ProjectHighlightCard = ({
  highlight,
}: {
  highlight: string;
}) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <HighlightIcon />
      <span className="text-base-600 text-base">{highlight}</span>
    </div>
  );
};

export function ProjectHighlightsMarquee({ containerWidth, highlights }: { containerWidth: number, highlights: string[] } = { containerWidth: 390, highlights: [] }) {
  const width = containerWidth ? containerWidth : 390;

  return (
    <div className={`relative flex flex-col justify-center items-center w-[${width}px] h-[75px]`}>
      <div className='flex flex-col gap-2 bg-base-3000 h-full'>
        <Marquee className='[--duration:25s]'>
          {highlights.map((highlight, index) => (
            <ProjectHighlightCard key={index} highlight={highlight} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-neutral-200 dark:from-neutral-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-neutral-200 dark:from-neutral-900"></div>
    </div>
  );
}