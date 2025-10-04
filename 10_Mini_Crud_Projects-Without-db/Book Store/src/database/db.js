let books = [
  {
    id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 12.99, category: 'fiction',
    description: 'A classic novel of the Jazz Age', publishedYear: 1925, isFeatured: true, stock: 15, rating: 4.5
  },
  {
    id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 14.50, category: 'fiction',
    description: 'A gripping tale of racial injustice', publishedYear: 1960, isFeatured: true, stock: 20, rating: 4.8
  },
  {
    id: '3', title: '1984', author: 'George Orwell', price: 11.25, category: 'fiction',
    description: 'Dystopian social science fiction', publishedYear: 1949, isFeatured: false, stock: 18, rating: 4.7
  },
  {
    id: '4', title: 'Pride and Prejudice', author: 'Jane Austen', price: 9.99, category: 'fiction',
    description: 'Romantic novel of manners', publishedYear: 1813, isFeatured: true, stock: 12, rating: 4.6
  },
  {
    id: '5', title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 16.75, category: 'fiction',
    description: 'Fantasy adventure novel', publishedYear: 1937, isFeatured: false, stock: 25, rating: 4.4
  },
  {
    id: '6', title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', price: 18.99, category: 'fiction',
    description: 'First book in the Harry Potter series', publishedYear: 1997, isFeatured: true, stock: 30, rating: 4.9
  },
  {
    id: '7', title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 13.45, category: 'fiction',
    description: 'Coming-of-age story', publishedYear: 1951, isFeatured: false, stock: 8, rating: 4.2
  },
  {
    id: '8', title: 'Lord of the Flies', author: 'William Golding', price: 10.99, category: 'fiction',
    description: 'Story of schoolboys stranded on an island', publishedYear: 1954, isFeatured: false, stock: 14, rating: 4.1
  },
  {
    id: '9', title: 'The Da Vinci Code', author: 'Dan Brown', price: 15.25, category: 'fiction',
    description: 'Mystery thriller novel', publishedYear: 2003, isFeatured: true, stock: 22, rating: 4.3
  },
  {
    id: '10', title: 'The Alchemist', author: 'Paulo Coelho', price: 12.99, category: 'fiction',
    description: 'Philosophical book about following dreams', publishedYear: 1988, isFeatured: true, stock: 35, rating: 4.5
  },
  {
    id: '11', title: 'A Brief History of Time', author: 'Stephen Hawking', price: 19.99, category: 'science',
    description: 'Book about cosmology for general readers', publishedYear: 1988, isFeatured: true, stock: 16, rating: 4.7
  },
  {
    id: '12', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', price: 21.50, category: 'history',
    description: 'Exploration of the history of humanity', publishedYear: 2011, isFeatured: true, stock: 28, rating: 4.8
  },
  {
    id: '13', title: 'Atomic Habits', author: 'James Clear', price: 17.99, category: 'non-fiction',
    description: 'Guide to building good habits', publishedYear: 2018, isFeatured: true, stock: 40, rating: 4.9
  },
  {
    id: '14', title: 'The Power of Now', author: 'Eckhart Tolle', price: 14.75, category: 'non-fiction',
    description: 'Guide to spiritual enlightenment', publishedYear: 1997, isFeatured: false, stock: 19, rating: 4.4
  },
  {
    id: '15', title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', price: 22.25, category: 'science',
    description: 'Book about human thinking and decision making', publishedYear: 2011, isFeatured: true, stock: 23, rating: 4.6
  },
  {
    id: '16', title: 'The Lean Startup', author: 'Eric Ries', price: 20.99, category: 'technology',
    description: 'Approach to business development', publishedYear: 2011, isFeatured: false, stock: 17, rating: 4.3
  },
  {
    id: '17', title: 'Steve Jobs', author: 'Walter Isaacson', price: 18.50, category: 'biography',
    description: 'Biography of Apple co-founder Steve Jobs', publishedYear: 2011, isFeatured: true, stock: 26, rating: 4.5
  },
  {
    id: '18', title: 'The Diary of a Young Girl', author: 'Anne Frank', price: 11.99, category: 'biography',
    description: 'Writings from a Jewish girl during WWII', publishedYear: 1947, isFeatured: true, stock: 13, rating: 4.8
  },
  {
    id: '19', title: 'The Very Hungry Caterpillar', author: 'Eric Carle', price: 8.99, category: 'children',
    description: 'Children\'s picture book', publishedYear: 1969, isFeatured: false, stock: 45, rating: 4.7
  },
  {
    id: '20', title: 'Goodnight Moon', author: 'Margaret Wise Brown', price: 7.50, category: 'children',
    description: 'Classic children\'s bedtime story', publishedYear: 1947, isFeatured: false, stock: 38, rating: 4.6
  },
  {
    id: '21', title: 'The Shining', author: 'Stephen King', price: 13.99, category: 'fiction',
    description: 'Horror novel about a haunted hotel', publishedYear: 1977, isFeatured: true, stock: 21, rating: 4.7
  },
  {
    id: '22', title: 'Dune', author: 'Frank Herbert', price: 16.25, category: 'fiction',
    description: 'Science fiction masterpiece', publishedYear: 1965, isFeatured: false, stock: 19, rating: 4.8
  },
  {
    id: '23', title: 'The Hunger Games', author: 'Suzanne Collins', price: 14.99, category: 'fiction',
    description: 'Dystopian young adult novel', publishedYear: 2008, isFeatured: true, stock: 32, rating: 4.6
  },
  {
    id: '24', title: 'The Girl on the Train', author: 'Paula Hawkins', price: 12.75, category: 'fiction',
    description: 'Psychological thriller', publishedYear: 2015, isFeatured: false, stock: 24, rating: 4.1
  },
  {
    id: '25', title: 'Gone Girl', author: 'Gillian Flynn', price: 13.50, category: 'fiction',
    description: 'Mystery thriller novel', publishedYear: 2012, isFeatured: true, stock: 27, rating: 4.3
  }
];

export default books;