# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(full_name:"David Marin", gender:"Male", birth_date:"17/04/1997", image_url:"https://media-exp1.licdn.com/dms/image/C4D03AQETiZCsBoVcdg/profile-displayphoto-shrink_100_100/0/1564154657903?e=1624492800&v=beta&t=BM8Xi_HnRn2V81GarHEuMr1MCk3iyzhRO_rXN27psn4")
User.create(full_name:"Pedro Perez", gender:"Male", birth_date:"12/07/1999", image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg")
User.create(full_name:"Paola Gonzalez", gender:"Female", birth_date:"24/06/1998", image_url:"https://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2020/03/estas_son_las_caracteristicas_que_vuelven_a_una_mujer_irresistible_segun_ellos.jpg")
User.create(full_name:"Jose Campos", gender:"Male", birth_date:"16/04/1996", image_url:"https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg")