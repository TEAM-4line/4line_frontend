import React from 'react';

interface InteractionBarProps {
  likes: number;
}

const InteractionBar: React.FC<InteractionBarProps> = ({ likes }) => {
  return (
    <footer className="flex gap-5 justify-between self-center mt-5 w-full text-sm text-black whitespace-nowrap max-w-[295px]">
      <div className="flex gap-2.5 items-start self-start">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/875c15b294a13dfc09e9c842e6e6782bd88c2808f1ba3f9dc74fc7bee3b265a4?placeholderIfAbsent=true&apiKey=759653f2ab50441cb226416825bdb2ac" className="object-contain shrink-0 aspect-[1.1] w-[22px]" alt="" />
        <span>{likes}</span>
      </div>
      <button className="focus:outline-none" aria-label="Share">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c903e585dfa758491d59a8e6339db72f5bfa34890a3e556374d71af807ac42d6?placeholderIfAbsent=true&apiKey=759653f2ab50441cb226416825bdb2ac" className="object-contain shrink-0 aspect-square w-[22px]" alt="" />
      </button>
    </footer>
  );
};

export default InteractionBar;