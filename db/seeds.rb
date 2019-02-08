# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

pk = User.create(
  email: "pkbanks@gmail.com",
  password: "pkpkpk"
)

puts "new user created: #{pk.email}" if pk

mario = User.create(
  email: "mario@popgage.co",
  password: "mariomariomario"
)

puts "new user created: #{mario.email}" if mario

bss = Store.create(
  name: "Brickell Smoke Shop"
)

puts "new store created: #{bss.name}" if bss

mango = Product.create(
  name: "JUUL Mango 5%",
  description: "yummy mango flavor",
  price: 24.99,
  store: bss
)

puts "new product created: #{mango.name}" if mango

mint = Product.create(
  name: "JUUL Mint 5%",
  description: "minty freshness",
  price: 19.99,
  store: bss
)

puts "new product created: #{mint.name}" if mint

puts "BSS products:"
bss.products.each do |p|
  puts "> #{p.name} @ $#{p.price}"
end

puts "--- end ---"
