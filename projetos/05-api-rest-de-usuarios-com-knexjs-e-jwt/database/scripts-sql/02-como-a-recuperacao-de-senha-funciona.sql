USE api_users;

CREATE TABLE passwordTokens(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    token VARCHAR(200) NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    used TINYINT UNSIGNED NOT NULL,
    CONSTRAINT fk_token_user FOREIGN KEY (user_id) REFERENCES users (id),
    PRIMARY KEY (id)
);

DROP TABLE passwordTokens;