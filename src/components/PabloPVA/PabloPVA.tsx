// Dentro de PabloPVA.tsx
import React from 'react';

export interface PabloPVAProps {
  title: string;
  description: string;
  avatar: string;
}

const PabloPVA: React.FC<PabloPVAProps> = ({ title, description, avatar }) => {
  return (
    <div>
      <img src={avatar} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default PabloPVA;

