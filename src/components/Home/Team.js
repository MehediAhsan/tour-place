import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Leroy Jenkins',
      role: 'Visual Designer',
      imageSrc: 'https://source.unsplash.com/100x100/?portrait?0',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Front-end Developer',
      imageSrc: 'https://source.unsplash.com/100x100/?portrait?1',
    },
    {
      id: 3,
      name: 'John Doe',
      role: 'Back-end Developer',
      imageSrc: 'https://source.unsplash.com/100x100/?portrait?2',
    },
    {
      id: 4,
      name: 'Ella Johnson',
      role: 'UI/UX Designer',
      imageSrc: 'https://source.unsplash.com/100x100/?portrait?3',
    },
  ];

  return (
    <section className="text-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h1
          data-aos="fade-in"
          data-aos-duration="1000"
          className="text-2xl md:text-4xl font-semibold leading-none text-primary mb-10"
        >
          Innovators and Creators
        </h1>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                alt={member.name}
                className="w-28 h-28 mx-auto mt-4 rounded-full border-2 border-primary p-2"
                src={member.imageSrc}
              />
              <div className="p-4">
                <p className="text-xl font-semibold leading-tight">
                  {member.name}
                </p>
                <p className="dark:text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
