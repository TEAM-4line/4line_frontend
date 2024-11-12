import React from 'react';

interface TravelDetailsProps {
  duration: string;
  cost: string;
  region: string;
  rating: string;
  description: string;
}

const TravelDetails: React.FC<TravelDetailsProps> = ({
  duration,
  cost,
  region,
  rating,
  description
}) => {
  return (
    <section className="self-start mt-4 text-xs text-black">
      <p><span className="text-gray-500"># 여행기간&nbsp; &nbsp;</span>{duration}</p>
      <p><span className="text-gray-500"># 비용&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>{cost}</p>
      <p><span className="text-gray-500"># 지역&nbsp; &nbsp; &nbsp;</span>{region}</p>
      <p><span className="text-gray-500"># 별점&nbsp; &nbsp; &nbsp;</span> {rating}</p>
      <p>{description}</p>
    </section>
  );
};

export default TravelDetails;