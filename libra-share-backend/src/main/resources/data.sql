INSERT INTO Book (title, description, image, author, isbn, genre)
VALUES ('To Kill a Mockingbird',
        'A classic novel set in the 1930s South, examining the issues of racial inequality and loss of innocence.',
        'https://m.media-amazon.com/images/I/51IXWZzlgSL._SX330_BO1,204,203,200_.jpg', 'Harper Lee', '9780446310789',
        ARRAY['Classic']),
       ('1984', 'A dystopian novel by George Orwell featuring surveillance and totalitarianism.',
        'https://images.penguinrandomhouse.com/cover/9788418915093', 'George Orwell',
        '9780451524935', ARRAY['Dystopian']),
       ('Moby Dick', 'A sailor embarks on a dangerous quest to hunt the white whale Moby Dick.',
        'https://m.media-amazon.com/images/I/41ZQ18MguuL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg', 'Herman Melville',
        '9781503280786', ARRAY['Adventure']),
       ('Pride and Prejudice',
        'In early 19th century England, a spirited young woman copes with societal expectations and romantic dramas.',
        'https://m.media-amazon.com/images/I/51YxyvZCpXS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg', 'Jane Austen',
        '9781503290563', ARRAY['Romance']),
       ('The Great Gatsby', 'A depiction of the roaring twenties and a critique of the American Dream.',
        'https://m.media-amazon.com/images/I/41NssxNlPlS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        'F. Scott Fitzgerald', '9780743273565', ARRAY['Classic']),
       ('War and Peace', 'A historical novel by Leo Tolstoy that captures life in Russia during the Napoleonic era.',
        'https://m.media-amazon.com/images/I/51J1nb00FLL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg', 'Leo Tolstoy',
        '9780486816432', ARRAY['Historical Fiction']),
       ('Crime and Punishment',
        'A psychological study of a man who explores the boundaries of crime and the repercussions of crossing those boundaries.',
        'https://m.media-amazon.com/images/I/41WYXBA5mrL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg', 'Fyodor Dostoevsky',
        '9780486415871', ARRAY['Psychological Fiction']),
       ('The Catcher in the Rye',
        'A rebellious teenager, Holden Caulfield, leaves prep school and experiences disillusionment and alienation.',
        'https://m.media-amazon.com/images/I/518dVCGFuhL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg', 'J.D. Salinger',
        '9787543321724', ARRAY['Young Adult Fiction']),
       ('The Hobbit',
        'Bilbo Baggins is whisked away from his comfortable life by Gandalf the wizard and a group of dwarves.',
        'https://m.media-amazon.com/images/I/51phEoA5C9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg', 'J.R.R. Tolkien',
        '9780547928227', ARRAY['Fantasy']),
       ('Brave New World', 'A dystopian novel that presents a future society driven by technology and efficiency.',
        'https://m.media-amazon.com/images/I/41-n-3hZMeL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg', 'Aldous Huxley',
        '9780060850524', ARRAY['Dystopian']),
       ('Fahrenheit 451', 'In a future society, books are outlawed and firemen burn any they find.',
        'https://m.media-amazon.com/images/I/41oWDDRb2cL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg', 'Ray Bradbury',
        '9781451673319', ARRAY['Dystopian']),
       ('The Adventures of Huckleberry Finn',
        'Mark Twain''s tale of a boy navigating life along the Mississippi River.',
        'https://m.media-amazon.com/images/I/41GwKsFFnbL._SX331_BO1,204,203,200_.jpg', 'Mark Twain', '9780486400778',
        ARRAY['Adventure']),
       ('Don Quixote',
        'The adventures of a man who reads so many chivalric novels that he decides to set out to revive chivalry.',
        'https://m.media-amazon.com/images/I/41NrvHGS3lL._SX331_BO1,204,203,200_.jpg', 'Miguel de Cervantes',
        '9780553213712', ARRAY['Classic']),
       ('In Search of Lost Time',
        'An expansive, multivolume novel by Marcel Proust that explores themes of time, space, and memory.',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-jhUK5V9xuXSQEFLlD6q7k4NsMqk6qHAt-hQQDhBYoVkHyEViAkRy8HaiVynKrkW0AA&usqp=CAU',
        'Marcel Proust',
        '9780679645689', ARRAY['Classic']),
       ('The Odyssey',
        'Homer''s epic poem recounting the adventures of Odysseus during his return from the Trojan War.',
        'https://m.media-amazon.com/images/I/51S8fUZ6nfL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg', 'Homer',
        '9780143039952', ARRAY['Epic']);

INSERT INTO users (address_line, city, email, first_name, last_name, latitude, longitude, password, phone_number, state,
                   username, zipcode)
VALUES ('123 Main Street', 'New York', 'john@example.com', 'John', 'Doe', '40.7128', '-74.0060',
        '$2a$10$zrEQEPk9l1mQBVMnxnX9A.klfIyxXbUwEMQhqwgh44IZCR.ZVjKDy', '555-1234', 'NY', 'johndoe', '10001'),
       ('456 Main Street', 'New York', 'johny@example.com', 'John', 'Doe', '40.7129', '-74.0061',
        '$2a$10$zrEQEPk9l1mQBVMnxnX9A.klfIyxXbUwEMQhqwgh44IZCR.ZVjKDy', '555-1234', 'NY', 'johnydoe', '10001'),
       ('456 Elm Street', 'Los Angeles', 'jane@example.com', 'Jane', 'Smith', '34.0522', '-118.2437',
        '$2a$10$zrEQEPk9l1mQBVMnxnX9A.klfIyxXbUwEMQhqwgh44IZCR.ZVjKDy', '555-5678', 'CA', 'janesmith', '90001'),
       ('789 Oak Street', 'Chicago', 'michael@example.com', 'Michael', 'Johnson', '41.8781', '-87.6298',
        '$2a$10$zrEQEPk9l1mQBVMnxnX9A.klfIyxXbUwEMQhqwgh44IZCR.ZVjKDy', '555-9012', 'IL', 'michaeljohnson', '60601'),
       ('321 Pine Street', 'Houston', 'sarah@example.com', 'Sarah', 'Davis', '29.7604', '-95.3698',
        '$2a$10$zrEQEPk9l1mQBVMnxnX9A.klfIyxXbUwEMQhqwgh44IZCR.ZVjKDy', '555-3456', 'TX', 'sarahdavis', '77001'),
       ('654 Maple Street', 'Philadelphia', 'robert@example.com', 'Robert', 'Brown', '39.9526', '-75.1652',
        '$2a$10$zrEQEPk9l1mQBVMnxnX9A.klfIyxXbUwEMQhqwgh44IZCR.ZVjKDy', '555-7890', 'PA', 'robertbrown', '19101');

INSERT INTO user_copy (last_exchanged_date, expires_at, exchange_ready, user_id, book_id)
VALUES ('1900-01-01', '1900-01-15', true, 1, 1),
       ('1900-01-01', '1900-01-15', true, 1, 3),
       ('1900-01-01', '1900-01-15', true, 1, 2),
       ('1900-01-01', '1900-01-15', true, 2, 4),
       ('1900-01-01', '1900-01-15', true, 2, 1),
       ('1900-01-01', '1900-01-15', true, 2, 3),
       ('1900-01-01', '1900-01-15', true, 3, 2),
       ('1900-01-01', '1900-01-15', true, 4, 4),
       ('1900-01-01', '1900-01-15', true, 5, 1);

INSERT INTO rating (comment, last_modified, rating, username, book_id, user_id)
VALUES ('book 1 of user 1', '1900-01-01', 1, 'johndoe', 1, 1),
       ('book 1 of user 2', '1900-01-01', 2, 'johnydoe', 1, 2),
       ('book 1 of user 3', '1900-01-01', 3, 'janesmith', 1, 3),
       ('book 1 of user 4', '1900-01-01', 1, 'michaeljohnson', 1, 4),
       ('book 2 of user 1', '1900-01-01', 2, 'johndoe', 2, 1),
       ('book 2 of user 2', '1900-01-01', 2, 'johnydoe', 2, 2),
       ('book 3 of user 1', '1900-01-01', 2, 'johndoe', 3, 1),
       ('book 3 of user 2', '1900-01-01', 2, 'johnydoe', 3, 2),
       ('book 3 of user 3', '1900-01-01', 2, 'janesmith', 3, 3);

