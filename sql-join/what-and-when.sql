SELECT "releaseYear", "genres"."name" as "genreName", "title"
FROM "films"
JOIN "filmGenre" on "films"."filmId" = "filmGenre"."filmId"
JOIN "genres" on "filmGenre"."genreId" = "genres"."genreId"
WHERE "title" = 'Boogie Amelie'
