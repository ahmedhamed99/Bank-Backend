## Bank API
a task for **TSF GRIP**:

## The Sparks Foundation

## Graduate Rotational Internship Program

Link Of The Website:

[https://grip-bank.vercel.app/]("https://grip-bank.vercel.app/")


Link Of The Internship:

[https://internship.thesparksfoundation.info/#steps-to-apply]("https://internship.thesparksfoundation.info/#steps-to-apply")


## Task Requirements

- Create a simple dynamic website for a Basic Banking System.
- Creating a dummy data in database for upto 10 customers.
- Customers table will have basic fields such as name, email, current balance etc..
- Transfers table will record all transfers
- No Login Page. No User Creation. Only transfer of money between multiple users.
- Host the website at 000webhost, github.io, heroku app or any other free hosting provider.

### API Endpoints

#### Transaction
- Latest `/transactions/latest` [GET]
- Make Transaction `/transactions` [POST]

#### Customers
- List `/customers` [GET]
- View One Customer `/customers/:id` [GET]

## DATA Shapes

#### Transactions
Table: *transactions*
- id `SERIAL PRIMARY KEY`
- sender_id `BIGINT` NOT NULL REFERENCES customers("id")
- reciever_id `BIGINT` NOT NULL REFERENCES customers("name")
- amount `BIGINT`
- created_at `TIMESTAMP`

#### User
Table: *Users*
- id `SERIAL PRIMARY KEY`
- name `VARCHAR` 
- balance `BIGINT`

## How to use
- First clone this repo
`git clone  https://github.com/ahmedhamed99/Bank-Backend.git`

- Run `npm install`

- Run `npm run start`

- Server runs on port 8000

Made By:
## **Ahmed Hamed**