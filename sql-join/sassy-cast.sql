SELECT "firstName", "lastName"
FROM "actors"
JOIN "castMembers" ON "actors"."actorId" = "castMembers"."actorId"
JOIN "films" ON "castMembers"."filmId" = "films"."filmId"
WHERE "films"."title" = 'Jersey Sassy'
