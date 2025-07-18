// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Highlight active nav link on scroll
const sectionIds = ['#genres', '#new-arrivals', '#best-sellers', '#author-spotlights', '#contact'];
const sectionElements = sectionIds.map(id => document.querySelector(id));
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 120;
  let activeIdx = -1;
  sectionElements.forEach((section, idx) => {
    if (section && section.offsetTop <= scrollPos) {
      activeIdx = idx;
    }
  });
  navLinks.forEach(link => link.classList.remove('active'));
  if (activeIdx !== -1) {
    navLinks[activeIdx + 1].classList.add('active'); // +1 to skip Home
  }
});

// Hero animation on load
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-content');
  hero.style.opacity = 0;
  hero.style.transform = 'translateY(40px)';
  setTimeout(() => {
    hero.style.transition = 'all 0.8s cubic-bezier(.77,0,.18,1)';
    hero.style.opacity = 1;
    hero.style.transform = 'translateY(0)';
  }, 200);
});

// Countdown timer
function startCountdown(durationSeconds) {
  const timerEl = document.getElementById('countdown-timer');
  let time = durationSeconds;
  function update() {
    const h = String(Math.floor(time / 3600)).padStart(2, '0');
    const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const s = String(time % 60).padStart(2, '0');
    timerEl.textContent = `${h}:${m}:${s}`;
    if (time > 0) {
      time--;
      setTimeout(update, 1000);
    }
  }
  update();
}
// Start a 2 hour countdown
startCountdown(2 * 60 * 60);

// Trending ticker (already animated by CSS)
// Book filtering logic (update to use flip cards)
const booksData = [
  {
    title: 'The Great Adventure',
    author: 'John Doe',
    genre: 'Fiction',
    price: 15,
    rating: 4,
    img: 'https://images.unsplash.com/photo-1544468607-e7b3e848ff87?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'An epic journey through uncharted lands.'
  },
  {
    title: 'Mystery of the Night',
    author: 'Jane Smith',
    genre: 'Mystery',
    price: 12,
    rating: 4,
    img: 'https://images.unsplash.com/photo-1552959932-8d638c6d6b5e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A thrilling tale of suspense and intrigue.'
  },
  {
    title: 'Learning to Fly',
    author: 'Alex Brown',
    genre: 'Self-help',
    price: 10,
    rating: 4,
    img: 'https://images.unsplash.com/photo-1558909671-a898cb80fcf4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A practical guide to personal growth.'
  },
  {
    title: 'Romance in Paris',
    author: 'Clara Belle',
    genre: 'Romance',
    price: 18,
    rating: 4,
    img: 'https://images.unsplash.com/photo-1658133833838-72980f64aada?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A beautiful love story set in the City of Light.'
  },
  {
    title: "Kids' World",
    author: 'Timmy Turner',
    genre: 'Kids',
    price: 10,
    rating: 4,
    img: 'https://images.unsplash.com/photo-1550949075-e962a6b49179?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A magical journey for young adventurers.'
  },
  {
    title: 'Self-Help Guide',
    author: 'Dr. Hope',
    genre: 'Self-help',
    price: 15,
    rating: 4,
    img: 'https://images.unsplash.com/photo-1565876770785-2685a6737319?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A comprehensive guide to mental well-being.'
  },
  {
    title: 'Science Fiction Saga',
    author: 'Isaac Nova',
    genre: 'Science Fiction',
    price: 25,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1693495430456-25c0a37ec5dc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A groundbreaking series in the future of technology.'
  },
  {
    title: 'Biography of a Dreamer',
    author: 'Marie Curie',
    genre: 'Biography',
    price: 20,
    rating: 4,
    img: 'https://images.unsplash.com/photo-1558045840-664c0e435bfc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A fascinating look into the life of a groundbreaking scientist.'
  },
  // 10 more books
  {
    title: 'The Lost Kingdom',
    author: 'Evelyn Woods',
    genre: 'Fiction',
    price: 17,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1736717507197-d47757740978?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A tale of adventure and ancient secrets.'
  },
  {
    title: 'Undercover Shadows',
    author: 'Sam Black',
    genre: 'Mystery',
    price: 14,
    rating: 4,
    img: 'https://plus.unsplash.com/premium_photo-1750353910373-fb7528618377?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A detective story full of twists.'
  },
  {
    title: 'Hearts in the Rain',
    author: 'Lily Rose',
    genre: 'Romance',
    price: 13,
    rating: 3,
    img: 'https://plus.unsplash.com/premium_photo-1675468310289-a72bc97c3e97?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A moving romance set in a rainy city.'
  },
  {
    title: 'The Little Explorer',
    author: 'Maggie Bright',
    genre: 'Kids',
    price: 9,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1598188306155-25e400eb5078?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A fun adventure for young readers.'
  },
  {
    title: 'Mindset Mastery',
    author: 'Paul Zen',
    genre: 'Self-help',
    price: 16,
    rating: 4,
    img: 'https://plus.unsplash.com/premium_photo-1722684650552-bfaf747e3c9f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Unlock your potential with proven strategies.'
  },
  {
    title: 'Galactic Frontiers',
    author: 'Nova Star',
    genre: 'Science Fiction',
    price: 22,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1706562017568-7964cce30aa0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Space battles and cosmic mysteries.'
  },
  {
    title: 'The Detective’s Diary',
    author: 'Arthur Doyle',
    genre: 'Mystery',
    price: 15,
    rating: 4,
    img: 'https://images.unsplash.com/photo-1565893089265-0b8a3ffd2e0b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Classic whodunit with a modern twist.'
  },
  {
    title: 'Love in the Library',
    author: 'Emma Page',
    genre: 'Romance',
    price: 12,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1711896099542-53253887088a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A librarian finds more than books.'
  },
  {
    title: 'The Science of Life',
    author: 'Dr. Green',
    genre: 'Biography',
    price: 18,
    rating: 4,
    img: 'https://images.unsplash.com/photo-1634872554756-18534b7ffe30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Biography of a famous biologist.'
  },
  {
    title: 'Starlight Dreams',
    author: 'Celeste Moon',
    genre: 'Fiction',
    price: 16,
    rating: 5,
    img: 'https://plus.unsplash.com/premium_photo-1721476529196-6838fc739dcc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A poetic journey through the night.'
  },
  {
    title: 'The Courageous Kid',
    author: 'Tommy Brave',
    genre: 'Kids',
    price: 11,
    rating: 4,
    img: 'https://images.unsplash.com/photo-1561492390-ebed40c838f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'A story of bravery for children.'
  }
];

function renderBooks(books) {
  const grid = document.querySelector('.books-grid');
  grid.innerHTML = '';
  if (books.length === 0) {
    grid.innerHTML = '<p style="width:100%;text-align:center;color:var(--primary);font-size:1.2rem;">No books found.</p>';
    return;
  }
  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
      <div class="book-card-inner">
        <div class="book-card-front">
          <img src="${book.img}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>By ${book.author}</p>
        </div>
        <div class="book-card-back">
          <h3>${book.title}</h3>
          <p>Genre: ${book.genre}</p>
          <p>Price: $${book.price}</p>
          <p>Rating: ${'★'.repeat(book.rating)}${'☆'.repeat(5-book.rating)}</p>
          <p>"${book.desc}"</p>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterBooks() {
  const search = document.querySelector('.search-bar').value.toLowerCase();
  const price = document.querySelector('.price-filter').value;
  const rating = document.querySelector('.ratings-filter').value;
  let filtered = booksData.filter(book => {
    const matchesSearch =
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search);
    let matchesPrice = true;
    if (price === '1') matchesPrice = book.price < 10;
    else if (price === '2') matchesPrice = book.price >= 10 && book.price <= 20;
    else if (price === '3') matchesPrice = book.price > 20 && book.price <= 30;
    else if (price === '4') matchesPrice = book.price > 30;
    const matchesRating = !rating || book.rating >= parseInt(rating);
    return matchesSearch && matchesPrice && matchesRating;
  });
  renderBooks(filtered);
}

window.addEventListener('DOMContentLoaded', () => {
  // Hero animation
  const hero = document.querySelector('.hero-content');
  hero.style.opacity = 0;
  hero.style.transform = 'translateY(40px)';
  setTimeout(() => {
    hero.style.transition = 'all 0.8s cubic-bezier(.77,0,.18,1)';
    hero.style.opacity = 1;
    hero.style.transform = 'translateY(0)';
  }, 200);

  // --- Shop by Genre carousel logic ---
  const genreTabs = document.querySelectorAll('.genre-tab');
  const genreCarousel = document.querySelector('.genre-carousel');
  function renderGenreCarousel(genre) {
    genreCarousel.innerHTML = '';
    const genreBooks = booksData.filter(book => book.genre === genre);
    if (genreBooks.length === 0) {
      genreCarousel.innerHTML = '<p style="width:100%;text-align:center;color:var(--primary);font-size:1.2rem;">No books in this genre.</p>';
      return;
    }
    genreBooks.forEach(book => {
      const card = document.createElement('div');
      card.className = 'book-card';
      card.innerHTML = `
        <div class="book-card-inner">
          <div class="book-card-front">
            <img src="${book.img}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>By ${book.author}</p>
          </div>
          <div class="book-card-back">
            <h3>${book.title}</h3>
            <p>Genre: ${book.genre}</p>
            <p>Price: $${book.price}</p>
            <p>Rating: ${'★'.repeat(book.rating)}${'☆'.repeat(5-book.rating)}</p>
            <p>"${book.desc}"</p>
          </div>
        </div>
      `;
      genreCarousel.appendChild(card);
    });
  }
  genreTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      genreTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      renderGenreCarousel(this.dataset.genre);
    });
  });
  renderGenreCarousel('Fiction');

  // --- Featured Books carousel logic ---
  let featuredIndex = 0;
  const FEATURED_VISIBLE = 3;
  const featuredCarousel = document.querySelector('.featured-carousel');
  function renderFeaturedCarousel() {
    featuredCarousel.innerHTML = '';
    const total = booksData.length;
    for (let i = 0; i < FEATURED_VISIBLE; i++) {
      const idx = (featuredIndex + i) % total;
      const book = booksData[idx];
      const card = document.createElement('div');
      card.className = 'book-card';
      card.innerHTML = `
        <div class="book-card-inner">
          <div class="book-card-front">
            <img src="${book.img}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>By ${book.author}</p>
          </div>
          <div class="book-card-back">
            <h3>${book.title}</h3>
            <p>Genre: ${book.genre}</p>
            <p>Price: $${book.price}</p>
            <p>Rating: ${'★'.repeat(book.rating)}${'☆'.repeat(5-book.rating)}</p>
            <p>"${book.desc}"</p>
          </div>
        </div>
      `;
      featuredCarousel.appendChild(card);
    }
  }
  function slideFeatured(dir) {
    featuredIndex = (featuredIndex + dir + booksData.length) % booksData.length;
    renderFeaturedCarousel();
  }
  renderFeaturedCarousel();
  const featuredLeftArrow = document.querySelector('.featured-arrow.left');
  const featuredRightArrow = document.querySelector('.featured-arrow.right');
  featuredLeftArrow.addEventListener('click', () => slideFeatured(-1));
  featuredRightArrow.addEventListener('click', () => slideFeatured(1));

  // --- Main books grid for search/filter ---
  // Do not show any books by default
  renderBooks([]);

  // Track if filter has been used
  let filterUsed = false;
  document.querySelector('.search-filter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    filterUsed = true;
    filterBooks();
  });

  // If filter has not been used, always show all books
}); 