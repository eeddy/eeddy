import {StaticImageData} from 'next/image';
import {FC, memo} from 'react';

import {type TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, logo} = item;
  const logoSrc = logo ? (typeof logo === 'string' ? logo : (logo as StaticImageData).src) : null;
  return (
    <div className="flex gap-x-4 pb-8 last:pb-0">
      {logoSrc && (
        <div className="hidden flex-shrink-0 md:flex md:items-start md:pt-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={`${location} logo`}
            className="h-10 w-10 rounded object-contain"
            src={logoSrc}
          />
        </div>
      )}
      <div className="flex flex-col text-center last:pb-0 md:text-left">
        <div className="flex flex-col pb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            {logoSrc && (
              <div className="md:hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={`${location} logo`}
                  className="h-5 w-5 rounded object-contain"
                  src={logoSrc}
                />
              </div>
            )}
            <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
            <span>•</span>
            <span className="flex-1 text-sm sm:flex-none">{date}</span>
          </div>
        </div>
        {content}
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
