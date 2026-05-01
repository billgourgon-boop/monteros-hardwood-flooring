// Real Google Business Profile reviews for Monteros Hardwood Flooring.
// Dates have been normalized to 2025-2026 per owner's request.
// To pull more reviews, copy them from the GBP and append below.

export interface Testimonial {
  text: string;
  author: string;
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
  service?: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    text: `I highly recommend Monteros Hardwood Flooring. They refinished the hardwood floors at our Redlands home and they look new and we are extremely happy with the results. Javier communicated regularly throughout the project. His team is professional, efficient and very prompt and the work was finished in a timely manner. We are very pleased with the results and we highly recommend them.`,
    author: 'Kari Morgan',
    city: 'Redlands',
    rating: 5,
    service: 'Hardwood Refinishing',
    date: '2026-04-10',
  },
  {
    text: `Easy to work with, on time and at the very fair quoted price. Javier honored an older quote and delivered amazing results. Highly recommended.`,
    author: 'David Thurston',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Refinishing',
    date: '2026-03-22',
  },
  {
    text: `We had such a great experience with Monteros Hardwood Flooring! Javier, the owner, and his team were super friendly and easy to work with. They really listened to what we wanted and made sure everything was perfect. The floors turned out amazing - so much better than we expected. Their attention to detail was impressive, and you can tell they take pride in their work. If you're looking to get your floors refinished, I can't recommend them enough!`,
    author: 'Bao Wallace',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Refinishing',
    date: '2026-02-18',
  },
  {
    text: `Another local hardwood refinisher flaked on me like 3 days before the scheduled job, but Javier and his guys came on short notice and got my 1,050 sq ft job done in 2 and a half days. They were total pros and my floors look and feel incredible. Communication was stellar as well. Highly recommend their services!`,
    author: 'William Perkins',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Refinishing',
    date: '2026-01-30',
  },
  {
    text: `Awesome crew! They work together like a machine - kind, courteous, pay attention to detail and very productive. They were on time and did a master job. I would only use these guys for future projects.`,
    author: 'Bob Entrikin',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Installation',
    date: '2025-12-12',
  },
  {
    text: `Absolutely beautiful! I would highly recommend anybody that is looking for flooring. They were all extremely nice and friendly, work fast and clean. It was a smooth transition from our old flooring to the new.`,
    author: 'April Largaespada',
    city: 'Inland Empire',
    rating: 5,
    service: 'Flooring Installation',
    date: '2025-11-04',
  },
  {
    text: `Absolutely THE BEST company. Very very good installers, communicators and all around professionals. Highly recommend!`,
    author: 'Debi Sintov',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Installation',
    date: '2025-10-15',
  },
  {
    text: `Monteros Hardwood Flooring was incredible from first phone call to the completion of the job. When I first contacted Javier he was straight forward and honest - no beating around the bush. He wasn't pushy and answered all my questions.`,
    author: `Heather d'Arc`,
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Installation',
    date: '2025-09-20',
  },
  {
    text: `Javier has done a great job representing his and his father's family-owned business. He was quick to come out, answer questions (there were many), and to schedule us quickly as well. The team of men worked hard and fast doing efficient work.`,
    author: 'Melissa Moore',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Refinishing',
    date: '2025-08-08',
  },
  {
    text: `They are the best - I will definitely refer them to all my friends and family. They were efficient, respectful, quick, and the quality of the flooring is amazing. My family and I are so satisfied with the outcome. We will use them again.`,
    author: 'Nicole Olive',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Installation',
    date: '2025-07-14',
  },
  {
    text: `This is the second time we've used the services of Monteros Hardwood Flooring. Javier and his crew repaired a section of our original hardwood floors that were missing after we removed a pony wall in our home's living room.`,
    author: 'Marilyn Stadler',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Repair',
    date: '2025-06-25',
  },
  {
    text: `Excellent! On time, professional, fair pricing, and they work fast. My entire house was done in a day and a half. My floors are from the 1950's - damaged with pet stains, cracked boards, gaps between grooves. Javier and the Monteros team brought them back to life.`,
    author: 'Veronica Arellano',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Refinishing',
    date: '2025-05-30',
  },
  {
    text: `I am so happy with the incredible job Javier did with my hardwood floors. They look amazing. He turned my worn-down dull floors into brand new ones. I wish I would have had them refinished a long time ago.`,
    author: 'Michelle Otis',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Refinishing',
    date: '2025-05-12',
  },
  {
    text: `I don't know why I waited to move out and rent my house to finally refinish my floors because they came out so beautiful! My house is 65 years old and the hardwood floors had lots of stains and wear. Javier guided me through my choices and the result is stunning.`,
    author: 'Julie Ann Brown',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Refinishing',
    date: '2025-04-22',
  },
  {
    text: `Our project went great! Javier and his team are great to work with - very informative, honest and they do great work. We are very happy with the work he did on our floors.`,
    author: 'Tim Griffin',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Installation',
    date: '2025-04-05',
  },
  {
    text: `The best price in town - bottom line. Great group of guys. Javier and his crew did a great job on my floors. Young and motivated to get the job done. I highly recommend them - give them a call.`,
    author: 'Javi Nicanor',
    city: 'Inland Empire',
    rating: 5,
    service: 'Hardwood Installation',
    date: '2025-03-18',
  },
  {
    text: `Ricardo did an excellent job while replacing our kitchen floor.`,
    author: 'Norma Hinderliter',
    city: 'Inland Empire',
    rating: 5,
    service: 'Kitchen Flooring',
    date: '2025-02-26',
  },
];
