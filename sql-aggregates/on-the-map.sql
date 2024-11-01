SELECT "countries"."name" as "country",
count("cities"."name") as "numOfCities"
FROM "countries"
join "cities" using ("countryId")
group by "country"
