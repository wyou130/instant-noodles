# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Users
puts "Seeding users..."
naijia = User.create(name: "NinjaH", location: "NY", password: "iLuvN00dl3z", email: "huang.naijia@gmail.com")
wendy = User.create(name: "WendayY", location: "NY", password: "iLuvN00dl3z2", email: "wyou130@gmail.com")

# Noodles
puts "Seeding noodles..."
ohsunghong = Noodle.create(brand: "Oh Sung Hong", flavor: "Hot & Spicy", image: "https://lh3.googleusercontent.com/keep-bbsk/AP6BvTRZRmppUyg5nFXzum8s2IsCElLZ6QUWJqgCt5_sRuXrcD93VdXyHmEE-IGxn38wSVYAUV4kXBFeoHqWr9GyeFX1IoLFCJ03KnaIGaeFOI5MyE1X=s544", birthplace: "Korea", style: "Noodle Soup")

ottogi = Noodle.create(brand: "Ottogi", flavor: "Odongtong Myoni Seafood", image: "https://lh3.googleusercontent.com/keep-bbsk/AP6BvTRBCt2y_EGwkv-jjX-EykDBgMoi-hnxUeJHpI7C6CB4NNeYIg88r1BSMPUb3zO67TTIwPzUL995Cycs_R5hk5GnWZ9vnokm5LhufrLzh8f3Ejjj=s600", birthplace: "Korea", style: "Noodle Soup")

ottogi2 = Noodle.create(brand: "Ottogi", flavor: "Sesame", image: "https://lh3.googleusercontent.com/keep-bbsk/AP6BvTRC01QBk2qgpcKdqfVvkNQbUupSdGMPuU06VSVKXI2ZK4l3Rl5lRaKtSlMlQFHqwMKKee5yCium7nv9TJkcnTn3wKmooShn7ydzS52PlaVOqGRd=s577", birthplace: "Korea", style: "Noodle Soup")

# Reviews
puts "Seeding reviews..."
Review.create(noodle_rating: 4, noodle_comment: "Surprisingly springy and withstood soaking even towards the end of the bowl, nice and chewy", toppings_rating: 2, toppings_comment: "Mostly small scallions with some small pieces of mushroom and carrots but did have a few small fishcakes", spice_rating: 1.5, overall_rating: 3, overall_comment: "Even though the noodle was surprisingly good, and this has potential to be a staple, I just don't necessarily see a reason to stock this rather than classic Shin Ramen Red", user_id: naijia.id, noodle_id: ohsunghong.id)

Review.create(noodle_rating: 3, noodle_comment: "Udon isn’t my favorite noodle but tried to be objective. In the first few minutes, the noodles withstood soaking quite well and remained bouncy. However, towards the end they did start to swell although avoided breaking down did lose some of the original texture.", toppings_rating: 3, toppings_comment: "Standard toppings but with fishcakes, seaweed AND a piece of kombu! Would recommend putting kombu into the pot at the start of the boil, and rest of the toppings closer to the end of the boil to retain more flavor", spice_rating: 1.5, overall_rating: 3, overall_comment: "A well balanced bowl of noodles worthy of challenging Neoguri, with potential to be great with some tweaks.", user_id: naijia.id, noodle_id: ottogi.id)

Review.create(noodle_rating: 3.5, noodle_comment: "Generally favorable noodles with springy texture. Not too chewy and erred slightly softer but overall solid and did not degrade much with soaking.", toppings_rating: 1.5, toppings_comment: "I had high hopes but was ultimately disappointed by the egg block. It was very confusing whether it was meant to be broken up or eaten as a whole unit. I split it in half and did both. Eating the block was confusing at best, so I think it was meant to create an egg drop soup texture, which would have helped the broth score… ever so slightly. Even still, the egg block was not big enough to make a difference. Very little other veggies and there were only a few sesame seeds.", spice_rating: 1.5, spice_comment: "Interesting spice level due to the sesame chili oil, which hit the lips more but the tongue less than other ramen.", overall_rating: 2, overall_comment: "Not the worse I've had but certainly wouldn't recommend it. Highlight was the sesame chili oil.", user_id: naijia.id, noodle_id: ottogi2.id)

puts "Done!"