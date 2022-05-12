select "c"."firstName",
       "c"."lastName",
       sum("payments"."amount") as "totalSpent"
from "customers" as "c"
join "payments" using ("customerId")
group by "c"."firstName",
       "c"."lastName"
order by "totalSpent" desc;
