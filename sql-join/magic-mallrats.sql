SELECT "firstName", "lastName"
FROM "customers"
JOIN "inventory" ON "customers"."storeId" = "inventory"."storeId"
JOIN "films" ON "inventory"."filmId" = "films"."filmId"
JOIN "rentals" ON "inventory"."inventoryId" = "rentals"."inventoryId"
where "films"."title" = 'Magic Mallrats'
