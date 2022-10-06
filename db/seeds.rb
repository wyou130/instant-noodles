# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Users
puts "Seeding users..."
naijia = User.create(name: "NinjaH", location: "NY", password: "iLuvN00dl3z", email: "huang.naijia@gmail.com", image: "https://img.freepik.com/free-vector/noodle-egg-with-chopstick-cartoon-icon-illustration_138676-2662.jpg?w=2000")
wendy = User.create(name: "WendayY", location: "NY", password: "iLuvN00dl3z2", email: "wyou130@gmail.com", image: "https://img.freepik.com/free-vector/french-fries-cartoon-icon-illustration-fast-food-icon-concept-isolated-flat-cartoon-style_138676-2923.jpg?w=2000")
ethan = User.create(name: "EshanB", location: "NY", password: "iH8N00dl3z", email: "ebb0202@aol.com", image: "https://img.freepik.com/premium-vector/pizza-illustration-slice-pizza-illustration-isolated-cute-pizza-icon-illustration_597063-104.jpg?w=2000")

# Noodles
puts "Seeding noodles..."
ohsunghong = Noodle.create(brand: "Oh Sung Hong", flavor: "Hot & Spicy", image: "../oh-sung-hong.jpg", birthplace: "Korea", style: "Noodle Soup")

ottogi = Noodle.create(brand: "Ottogi", flavor: "Odongtong Myoni Seafood", image: "../ottogi-odongtong.jpg", birthplace: "Korea", style: "Noodle Soup")

ottogi2 = Noodle.create(brand: "Ottogi", flavor: "Sesame", image: "../ottogi-sesame.jpeg", birthplace: "Korea", style: "Noodle Soup")

ottogi3 = Noodle.create(brand: "Ottogi", flavor: "Yeul", image: "../ottogi-yeul.jpeg", birthplace: "Korea", style: "Noodle Soup")

nongshim = Noodle.create(brand: "Nongshim", flavor: "Ansung", image: "../nongshim-ansung.jpeg", birthplace: "USA", style: "Noodle Soup")

# Reviews
puts "Seeding reviews..."
Review.create(noodle_rating: 4, noodle_comment: "Surprisingly springy and withstood soaking even towards the end of the bowl, nice and chewy", toppings_rating: 2, toppings_comment: "Mostly small scallions with some small pieces of mushroom and carrots but did have a few small fishcakes", spice_rating: 1.5, overall_rating: 3, overall_comment: "Even though the noodle was surprisingly good, and this has potential to be a staple, I just don't necessarily see a reason to stock this rather than classic Shin Ramen Red", user_id: naijia.id, noodle_id: ohsunghong.id)

Review.create(noodle_rating: 3, noodle_comment: "Udon isn’t my favorite noodle but tried to be objective. In the first few minutes, the noodles withstood soaking quite well and remained bouncy. However, towards the end they did start to swell although avoided breaking down did lose some of the original texture.", toppings_rating: 3, toppings_comment: "Standard toppings but with fishcakes, seaweed AND a piece of kombu! Would recommend putting kombu into the pot at the start of the boil, and rest of the toppings closer to the end of the boil to retain more flavor", spice_rating: 1.5, overall_rating: 3, overall_comment: "A well balanced bowl of noodles worthy of challenging Neoguri, with potential to be great with some tweaks.", user_id: naijia.id, noodle_id: ottogi.id)

Review.create(noodle_rating: 3.5, noodle_comment: "Generally favorable noodles with springy texture. Not too chewy and erred slightly softer but overall solid and did not degrade much with soaking.", toppings_rating: 1.5, toppings_comment: "I had high hopes but was ultimately disappointed by the egg block. It was very confusing whether it was meant to be broken up or eaten as a whole unit. I split it in half and did both. Eating the block was confusing at best, so I think it was meant to create an egg drop soup texture, which would have helped the broth score… ever so slightly. Even still, the egg block was not big enough to make a difference. Very little other veggies and there were only a few sesame seeds.", spice_rating: 1.5, spice_comment: "Interesting spice level due to the sesame chili oil, which hit the lips more but the tongue less than other ramen.", overall_rating: 2, overall_comment: "Not the worse I've had but certainly wouldn't recommend it. Highlight was the sesame chili oil.", user_id: naijia.id, noodle_id: ottogi2.id)

Review.create(noodle_rating: 3.5, noodle_comment: "Pretty much the same as the other Ottogi brand ramen (square block) that was above average, nice and chewy", toppings_rating: 2, toppings_comment: "The only reason why this is not lower is due to the toppings being somewhat “fresher” and better tasting than usual, although it still lacks the large chunks and freshness of Shin. It did, however, add a bit to the broth score since it contributed a bit to the overall flavor of the soup.", spice_rating: 2, overall_rating: 3.5, overall_comment: "Ok, cheated a little bit here due to it having slightly more spice flavor. It was the only thing that edged it a little bit over Oh Sung. The flavor and overall experience were also more similar to Shin ramen.", user_id: naijia.id, noodle_id: ottogi3.id)

Review.create(noodle_rating: 1.5, noodle_comment: "These noodles are really disappointing compared to what I expected from NongShim. They did not have a good texture at the start and are squarish rather than perfectly round.", toppings_rating: 1.5, toppings_comment: "Toppings are few despite the call-out of mushrooms on the front. The rest of the toppings were mostly small pieces of seaweed which is extremely odd for a beef noodle soup.", spice_rating: 1, overall_rating: 1.5, overall_comment: "Underwhelming and very disappointing. But mostly just a very confusing product that shouldn't exist.", user_id: naijia.id, noodle_id: nongshim.id)

puts "Done!"