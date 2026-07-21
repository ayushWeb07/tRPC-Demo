CREATE TABLE `urls` (
	`id` int AUTO_INCREMENT PRIMARY KEY,
	`original_url` varchar(255) NOT NULL,
	`short_url` varchar(255) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `short_url_unique` UNIQUE INDEX(`short_url`)
);
