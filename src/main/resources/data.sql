DROP TABLE IF EXISTS PLAYER_DETAILS;
DROP TABLE IF EXISTS TRANSACTION_DETAILS;

CREATE TABLE PLAYER_DETAILS (
                                id INT AUTO_INCREMENT  PRIMARY KEY,
                                name VARCHAR(250),
                                surname VARCHAR(250),
                                USERNAME VARCHAR(250),
                                BALANCE DECIMAL(15,2)
);

CREATE TABLE TRANSACTION_DETAILS (
                                       id INT AUTO_INCREMENT  PRIMARY KEY,
                                       player_id INT,
                                       transaction_type VARCHAR(250),
                                       amount DECIMAL(15,2),
                                       transaction_details VARCHAR(250)

);

INSERT INTO PLAYER_DETAILS (name, surname, USERNAME, BALANCE) VALUES
                                                    ('John', 'Stamos', 'JS01', 3434443),
                                                    ('John', 'Doe', 'JD01', 12211),
                                                    ('Michael', 'McCarvin', 'MM01', 6677);

INSERT INTO TRANSACTION_DETAILS (player_id, transaction_type, amount, transaction_details) VALUES
                                                                                 (1,'WAGER', 10000, '(€50) X (30) = €1,500'),
                                                                                 (1, 'WAGER', 7500, '(€50) X (30) = €1,500'),
                                                                                 (1, 'WAGER', 3211, '(€50) X (30) = €1,500'),
                                                                                 (1, 'WAGER', 6588, '(€50) X (30) = €1,500'),
                                                                                 (1, 'WAGER', 33240, '(€50) X (30) = €1,500'),
                                                                                 (1, 'WAGER', 65532, '(€50) X (30) = €1,500'),
                                                                                 (1, 'WIN', 33240, '(€50) X (30) = €1,500'),                                                                                 (1,'Cheque Account', '510332213451', 10000),
                                                                                 (1, 'WIN', 7500, '(€50) X (30) = €1,500'),
                                                                                 (1, 'WAGER', 3211, '(€50) X (30) = €1,500'),
                                                                                 (1, 'WAGER', 6588, '(€50) X (30) = €1,500'),
                                                                                 (2, 'WAGER', 33240, '(€50) X (30) = €1,500'),
                                                                                 (2, 'WAGER', 65532, '(€50) X (30) = €1,500'),
                                                                                 (2, 'WAGER', 33240, '(€50) X (30) = €1,500'),
                                                                                 (2, 'WAGER', 65532, '(€50) X (30) = €1,500');