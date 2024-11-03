SELECT "cities"."name" as "cityName",
        "line1",
       "district"
    FROM "addresses"
    JOIN "cities" ON "addresses"."cityId" = "cities"."cityId"
