INSERT INTO tasks (id, task, importance, completed, calendar, repeats, created, edited)
SELECT * FROM (
    SELECT 0, 'Make dinner', 'medium', TRUE, '2024-05-31', 'daily', NOW(), null
) AS tmp
WHERE NOT EXISTS (
    SELECT id FROM tasks LIMIT 1
);