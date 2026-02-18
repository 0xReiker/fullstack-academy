-- 1. Get the username of the person who made the post about EmptyStack in forum_posts.
-- The post was made in April 2048 and mentions EmptyStack and their dad.
-- Answer: smart-money-44
SELECT * FROM forum_posts WHERE date BETWEEN '2048-04-01' AND '2048-05-01' AND content ILIKE '%emptystack%';

-- 2. Get the last name of the person associated with that username in forum_accounts.
-- Answer: Steele
SELECT * FROM forum_accounts WHERE username ILIKE 'smart-money-44';

-- 3. Find all other accounts with the same last name.
-- Answer: Andrew, Kevin, Brad - sharp-engine-57, stinky-tofu-98, smart-money-44
SELECT * FROM forum_accounts WHERE last_name ILIKE 'Steele'; 

-- 4. Find all accounts in emptystack_accounts with the same last name.
-- Answer: triple-cart-38, lance-main-11
SELECT * FROM emptystack_accounts WHERE last_name ILIKE 'Steele';

-- 5. Use the matching employee's credentials to log in with: node mainframe
-- Answer: Did it

-- 6. Find the message in emptystack_messages about self-driving taxis.
-- Answer: same guy as before - triple-stack-38 - Project TAXI
SELECT * FROM emptystack_messages WHERE body ILIKE '%taxi%';

-- 7. Get the credentials for the admin account from emptystack_accounts.
-- Answer: your-boss-99 + notagaincarter
SELECT * FROM emptystack_accounts WHERE username ILIKE '%your-boss%';

-- 8. Get the ID of the project from emptystack_projects.
-- Answer: DczE0v2b | TAXI
SELECT * FROM emptystack_projects WHERE code ILIKE '%taxi%'; 
-- 9. Shut it down: node mainframe -stop
-- Answer: 
PS C:\Users\jason\Documents\fullstackAcademy\courseWork\block6.03\6.03-mainframe-override> node mainframe -stop
WARNING: admin access required. Unauthorized access will be logged.
Username: your-boss-99
Password: notagaincarter
Welcome, your-boss-99.
Project ID: DczE0v2b
Initiating project shutdown sequence...
5...
4...
3...
2...
1...
Project shutdown complete.
