## Project title

Book library - an exercise of Sequelize Models. Sequelize can perform **CRUD** operations within relational databases (I used PostgresSQL); it can also perform foreign key associations with tables.

### User Stories

Using these stories as a basis, helped me to complete each test requirement.

1. Create library account

   ```
   As a library customer
   I want to create an account with my name, email address and password
   So I can list and borrow books from the online library
   ```

2. Don't return library account password

   ```
   As a library customer
   I want my password to not be returned from the API
   So my account is more secure
   ```

3. Email validation on sign up

   ```
   As a library customer
   I want to receive an error if the email address I sign up with is not valid
   So I can receive emails
   ```

4. Password length validation on sign up

   ```
   As a library customer
   I want to receive an error if the password I sign up with is less than 8 characters long
   So my account is secure
   ```

5. Add book listings for lending

   ```
   As a book lender
   I want to be able to create a book listing on my account with a title, author, genre and ISBN number
   So people can loan out my books
   ```

6. Title and author should be mandatory

   ```
   As a library customer
   I want all book listings to have at least a title and an author
   So I know what I'm looking at
   ```

7. Display books for lending

   ```
   As a library customer
   I want to see a list of all books
   So I can find books to borrow
   ```

8. Search for books by fields

   ```
   As a library customer
   I want to be able to search for books with a specific title, author, genre or ISBN
   So I can find books I am interested in
   ```

## Project setup

### Environment setup

1. Docker - run
   ```
   docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
   ```
2. pgAdmin - setup database serviers 'postgres'
3. Postman

### API setup

1. change to working directory, i.e. /projects
2. run
   ```
   git clone https://github.com/DavidCheungTW/book-library.git
   cd book-library
   npm install
   ```
3. Environment variables

   Create a `.env` file for postman test:

   ```
   PGPASSWORD=password
   PGDATABASE=book_library_dev
   PGUSER=postgres
   PGHOST=localhost
   PGPORT=5432
   PORT=3000
   ```

   Create a `.env.test` file for `npm test`:

   ```
   PGPASSWORD=password
   PGDATABASE=book_library_dev_test
   PGUSER=postgres
   PGHOST=localhost
   PGPORT=5432
   PORT=3000
   ```

## Tests

### Test by node

1. use `book_library_dev_test` database
2. change to book-library directory
3. run `npm test` to execute the test
4. add test case to \*.test.js files
5. run `npm test` to execute the test again

### Test by Postman

1. use `book_library_dev` database
2. change to book-library directory
3. run `npm start` to start testing
4. input test cases in Postman and check results (remark: suggest to use \*.test.js test cases first, then you can add your own test case)
5. Example:

## License

Free license

MCRCODES © [Lee Moss]()
