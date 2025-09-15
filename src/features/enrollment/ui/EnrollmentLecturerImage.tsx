import clsx from 'clsx';

interface LectureImageProps {
  imageUrl: string;
  altText: string;
}

export default function LectureImage({ imageUrl, altText }: LectureImageProps) {
  return (
    <img
      src={imageUrl}
      alt={altText}
      className={clsx('w-[80px] h-[80px] rounded-full object-cover')}
    />
  );
}
