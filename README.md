## System Overview
Our decentralized library system is a web-based application that allows users to access a database of books and interact with other users. Our system enables users to leave reviews and ratings for books, check out physical copies of books, and facilitates the transfer of books between users. We utilize ReactJS for the frontend, Java/Bootstrap for the backend, the Google Maps API for location tracking, and PostgreSQL for the database management.

## System Components
1. Frontend:
   - ReactJS: We will utilize ReactJS to develop a responsive and user-friendly frontend interface. It will handle user interactions, display book information, reviews, and provide a seamless experience for our users.

2. Backend:
   - Java: We will use Java as the backend programming language to handle the business logic of our application.
   - Bootstrap: We will implement the Bootstrap framework to create a responsive and mobile-friendly UI design.

3. Database:
   - PostgreSQL: We will utilize PostgreSQL as the database management system to store information about books, users, reviews, and book transactions.

4. Google Maps API:
   - We will integrate the Google Maps API to identify the nearest physical book to the requesting user. This will help us in locating books and facilitating their transfer between users.

## System Architecture
Our decentralized library system follows a client-server architecture, where the frontend interacts with the backend to retrieve and manipulate data stored in the database. The Google Maps API is utilized for location tracking and book availability.

The system architecture can be divided into the following layers:

1. Presentation Layer:
   - User Interface: We will develop an intuitive and user-friendly interface using ReactJS, allowing our users to browse books, leave reviews, and perform various actions.
   - User Authentication: We will implement a secure login and registration system to authenticate our users.

2. Application Layer:
   - Backend Services: We will implement Java-based backend services to handle user requests, manage book transactions, and interact with the database.
   - Data Validation: We will implement robust validation logic to ensure data integrity and prevent unauthorized access.

3. Data Layer:
   - Database: We will utilize PostgreSQL as the database management system to store and retrieve data related to books, users, reviews, and transactions.
   - Database Schema: We will design an efficient database schema that represents entities such as books, users, reviews, and transactions, and establish appropriate relationships between them.

4. Integration Layer:
   - Google Maps API Integration: We will integrate the Google Maps API to identify the nearest physical book to the requesting user.
   - API Communication: We will implement RESTful APIs to facilitate communication between the frontend and backend components.

## System Features
1. Book Management:
   - Store book information such as title, author, genre, and availability in the database.
   - Allow users to search, filter, and view book details.
   - Enable users to leave reviews and ratings for books.

2. User Management:
   - Maintain user profiles with information such as name, contact details, and borrowing history.
   - Implement user registration and authentication mechanisms.
   - Provide user roles (e.g., admin, regular user) to manage system access and privileges.

3. Book Checkout:
   - Identify the nearest physical book to the requesting user using the Google Maps API.
   - Facilitate book transfer between users by updating the book's ownership in the database.
   - Enforce a one-week waiting period before a checked-out book can be checked out again.

4. Review and Rating System:
   - Enable users to leave reviews and ratings for books.
   - Implement a rating system that aggregates user ratings and displays an average rating for each book.

## Screenshots
<table>
  <tr>
    <td><b>Desktop</td>     
  </tr>
 
  <tr>
    <td valign="top"><img width="1200" alt="Screen Shot 2022-10-04 at 4 57 21 PM" src="https://github.com/crhomere/LibraShare/assets/49917973/a5fb5e7e-57c6-4cb1-a702-61ecf0987551" />
  </td>
  </tr>
  
  <tr>
    <td valign="top"><img width="1200" alt="Screen Shot 2022-10-04 at 12 59 48 PM" src="https://github.com/crhomere/LibraShare/assets/49917973/fbde19f0-2c6e-4d71-a767-98959d489aa0" />
 </td>
 </tr>
    
  <tr>
    <td valign="top"><img width="1200" alt="Screen Shot 2022-10-04 at 1 00 21 PM" src="https://github.com/crhomere/LibraShare/assets/49917973/e83342ea-5084-4d6d-89c8-86a2e1944c32" />
 </td>
 </tr>
  
  <tr>
    <td valign="top"><img width="1200" alt="Screen Shot 2022-10-04 at 1 00 37 PM" src="https://github.com/crhomere/LibraShare/assets/49917973/f4d06276-154e-45ec-8ff0-8cc6ebc0017a" />
 </td>
 </tr>
  
  <tr>
    <td valign="top"><img width="1200" alt="Screen Shot 2022-10-04 at 1 00 54 PM" src="https://github.com/crhomere/LibraShare/assets/49917973/a35e38c2-fa69-4f8d-8b03-3a5682474c57" />
 </td>
 </tr>
  
  <tr>
    <td valign="top"><img width="1200" alt="Screen Shot 2022-10-04 at 1 01 14 PM" src="https://github.com/crhomere/LibraShare/assets/49917973/88807ea5-eb01-4cd5-ab7c-30e0089badb0" />
 </td>
 </tr>
  
  <tr>
    <td valign="top"><img width="1200" alt="Screen Shot 2022-10-04 at 1 01 28 PM" src="https://github.com/crhomere/LibraShare/assets/49917973/3e232aa8-5897-402f-8556-dbe685446003" />
 </td>
 </tr>

  <tr>
    <td valign="top"><img width="1200" alt="Screen Shot 2022-10-04 at 1 01 28 PM"src="https://github.com/crhomere/LibraShare/assets/49917973/d36e187d-ae41-44fd-bfd6-b5e8c2f41774" />
 </td>
 </tr>


   <tr>
    <td valign="top"><img width="1200" alt="Screen Shot 2022-10-04 at 1 01 28 PM" src="https://github.com/crhomere/LibraShare/assets/49917973/f9ad119f-f967-4115-90eb-2c21d781f038" />
 </td>
 </tr>

 
   <tr>
    <td valign="top"><img width="1200" alt="Screen Shot 2022-10-04 at 1 01 28 PM" src="https://github.com/crhomere/LibraShare/assets/49917973/63a4c2f5-cdc5-4c11-a458-e5884c95996a" />
 </td>
 </tr>

   <tr>
    <td valign="top"><img width="1200" alt="Screen Shot 2022-10-04 at 1 01 28 PM" src="https://github.com/crhomere/LibraShare/assets/49917973/4e6cdebe-bfd8-4989-8b42-be12ac155ba2" />
 </td>
 </tr>
 

 


 </table>
