SELECT "firstName", "lastName",
sum("payments"."amount") as "totalPayments"
FROM "customers"
JOIN "payments" USING ("customerId")
GROUP BY "firstName", "lastName"
ORDER BY ("totalPayments") DESC
