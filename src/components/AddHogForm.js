import React, { useState } from 'react';

function AddHogForm({ onAddHog }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState(false);
  const [highestMedal, setHighestMedal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog({
      name,
      image,
      specialty,
      weight: parseFloat(weight),
      greased,
      highestMedal
    });
    setName('');
    setImage('');
    setSpecialty('');
    setWeight('');
    setGreased(false);
    setHighestMedal('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <label>
        Greased
        <input
          type="checkbox"
          checked={greased}
          onChange={() => setGreased(prev => !prev)}
        />
      </label>
      <input
        type="text"
        placeholder="Highest Medal"
        value={highestMedal}
        onChange={(e) => setHighestMedal(e.target.value)}
      />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
