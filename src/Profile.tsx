import React, { useState } from 'react';

const users = [
  {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  },
  {
    name: 'Alan Turing',
    imageUrl: 'https://i.imgur.com/MK3eW3Am.jpg',
    imageSize: 90,
  },
  {
    name: 'Ada Lovelace',
    imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
    imageSize: 90,
  },
];

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

export default function Profile() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    console.log('You clicked me!',count);
    setCount(count * 9);
      console.log('You clicked After',count);
  };

  return (
    <>
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    </>
  );
}
