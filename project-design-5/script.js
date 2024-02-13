const cardsData = [
  {
    title: "My Beloved Talisha",
    quote: "Talisha, you are the melody to my heart's song, my eternal love.",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmFsZW50aW5lfGVufDB8fDB8fHww",
  },
  {
    title: "Sweetheart Talisha",
    quote:
      "In your eyes, I see whole wold Talisha. i wanna let you sleep like this",
    image:
      "https://images.unsplash.com/photo-1582098557089-6657247686f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Darling Talisha",
    quote:
      "You are the light, Talisha, that guides me through the darkest nights.",
    image:
      "https://images.unsplash.com/photo-1518414881329-0f96c8f2a924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZhbGVudGluZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "My Dearest Talisha",
    quote:
      "With every beat of my heart, i wanna listen those beautiful lines of music by you.",
    image:
      "https://images.unsplash.com/photo-1421217336522-861978fdf33a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "My Precious Talisha",
    quote:
      "I wanna spend every moment of my life with you. you will always be my first priority",
    image:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmVycyUyMHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "My Love, Talisha",
    quote:
      "Your love, Talisha, is my greatest treasure, my paradise, my eternal love.",
    image:
      "https://images.unsplash.com/photo-1517837125937-53bd402f49d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZhbGVudGluZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Talisha, My Darling",
    quote:
      "Your love fills my days with warmth, Talisha, ignites the flames of passion within me.",
    image:
      "https://images.unsplash.com/photo-1579621970936-fbac90155f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZhbGVudGluZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "My Sweet Talisha",
    quote:
      "Talisha, your love is the melody that plays in my heart, my sunshine, my eternal love.",
    image:
      "https://images.unsplash.com/photo-1513193563746-fac77a988f8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhbGVudGluZXMlMjBkYXl8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "My Talisha, My Love",
    quote: "In the evening, me and my baby talisha walking in beach",
    image:
      "https://images.unsplash.com/photo-1517758344467-7043e91d33cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZhbGVudGluZXMlMjBkYXl8ZW58MHx8MHx8fDA%3D",
  },
];

const cards = document.querySelector(".cards");

let cardContent = "";
function showCards() {
  cardsData.forEach((card) => {
    cardContent += `<div class="card relative overflow-hidden bg-pink-100 rounded-lg shadow-lg h-[27rem] w-96">
    <img src="${card.image}" alt="Valentine's Card Image" class="h-64 w-full object-cover rounded-t-lg">
    <div class="p-4">
      <h2 class="text-2xl font-bold text-pink-800 mb-2">${card.title}</h2>
      <p class="text-pink-600 italic">${card.quote}</p>
    </div>
    <div class="absolute bottom-0 left-0 right-0 p-4 text-center bg-pink-700 bg-opacity-75 rounded-b-lg">
      <p class="text-white font-semibold">Happy Valentine's Day!</p>
    </div>
  </div>
  `;
    cards.innerHTML = cardContent;
  });
}
showCards();
