import React from 'react';
import UserInfo from './UserInfo';
import TravelDetails from './TravelDetails';
import ImageSection from './ImageSection';
import InteractionBar from './InteractionBar';

interface ReviewCardProps {
  avatarSrc: string;
  name: string;
  location: string;
  duration: string;
  cost: string;
  region: string;
  rating: string;
  description: string;
  imageSrc: string;
  likes: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  avatarSrc,
  name,
  location,
  duration,
  cost,
  region,
  rating,
  description,
  imageSrc,
  likes
}) => {
  return (
    <article className="flex flex-col px-6 py-5 mt-6 w-full bg-white rounded-lg border border-gray-200 shadow-lg max-w-sm">
      <UserInfo username={name} location={location} />
      <TravelDetails
        duration={duration}
        cost={cost}
        region={region}
        rating={rating}
        description={description}
      />
      <ImageSection imageSrc={imageSrc} />
      <InteractionBar likes={likes} />
    </article>
  );
};

export default ReviewCard;