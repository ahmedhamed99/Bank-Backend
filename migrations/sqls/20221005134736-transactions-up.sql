CREATE TABLE transactions(
    sender_id bigint REFERENCES customers(id),
    receiver_id bigint REFERENCES customers(id),
    amount bigint,
    created_at TIMESTAMP
);