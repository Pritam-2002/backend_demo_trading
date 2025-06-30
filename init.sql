CREATE TABLE IF NOT EXISTS segments (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    admin_value INTEGER NOT NULL,
    master_value INTEGER NOT NULL,
    percentage BOOLEAN DEFAULT FALSE,
    is_blocked BOOLEAN DEFAULT FALSE
);

INSERT INTO segments (title, admin_value, master_value, percentage, is_blocked)
VALUES ('BSE', 150, 150, TRUE, FALSE);

INSERT INTO segments (title, admin_value, master_value, percentage, is_blocked)
VALUES ('NSE', 190, 250, TRUE, FALSE);

INSERT INTO segments (title, admin_value, master_value, percentage, is_blocked)
VALUES ('F&O', 2000, 2500, FALSE, FALSE);

INSERT INTO segments (title, admin_value, master_value, percentage, is_blocked)
VALUES ('MCX', 2000, 2500, FALSE, TRUE);
