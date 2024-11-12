import React from 'react';

interface ImageSectionProps {
  imageSrc: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ imageSrc }) => {
  return (
    <figure className="mt-5">
      <img loading="lazy" src={imageSrc} className="object-contain w-full rounded-lg aspect-[1.82]" alt="Travel destination" />
    </figure>
  );
};

export default ImageSection;