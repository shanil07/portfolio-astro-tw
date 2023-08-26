import type { ImgHTMLAttributes } from "react";

type Props = {
  title?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

/**
 * Only intended to be used in Technologies section
 */
const ImageItem = ({ title, ...rest }: Props) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <img className="w-16 md:w-32 aspect-square" {...rest} />
      <div className="text-default">{title}</div>
    </div>
  );
};

export { ImageItem };
