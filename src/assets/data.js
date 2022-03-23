import { Meal } from '../models/Meal';
import { Beverage } from '../models/Beverage';

export const beverages = [
	new Beverage(
		'Blue berry Bizar',
		4.34,
		'/drinks/blueberryDrink.jpg',
		'This bizar berry concocture is not for the faint harted. Drink and experience blue berries as you have never drank before.'
	),
	new Beverage(
		'Fresh French',
		5.2,
		'/drinks/freshDrink.jpg',
		'Being stylized and refreshing is what it is all about on a terrace in Paris. Do not just hydrate, stylize as well.'
	),
	new Beverage(
		'Lime drink X',
		2.5,
		'/drinks/limeDrink.jpg',
		'The recipe of lime drink X is a secret you know. Just enjoy it and be amazed how simple but effective a lime drink can be.'
	),
	new Beverage(
		'Purple rain',
		8.4,
		'/drinks/purpleDrink.jpg',
		'Be funky, be fresh. Be an artist formally know as a thirsty person. This new funkadelic refresher is only for the one that grooves.'
	),
	new Beverage(
		'Lucky red',
		4.45,
		'/drinks/redDrink.jpg',
		'Red is one of the most important colors in the world. Chinese believe red is good fortune and prosperty. May you receive it with each sip.'
	)
];
export const meals = [
	new Meal(
		'Cheese Extravaganza',
		15.75,
		'/meals/cheesePizza.jpg',
		'How deep is the ocean, How much stars are there in the galaxy, How much chees can a pizza take... one of the questions we have the answer'
	),
	new Meal(
		'Fat friends friday',
		20.0,
		'/meals/fattyBurger.jpg',
		'Its fat, its for with friends and ONLY on friday. Yes you read it correct, due it is fatty nature it can only be served once per week'
	),
	new Meal(
		'Fries and a Burger',
		14.0,
		'/meals/friesBurger.jpg',
		'Simple you want burger and fries, we give you burger and fries. Plain simple, nothing else.'
	),
	new Meal(
		'Ye ol Burger',
		15.35,
		'/meals/oldBurger.jpg',
		'Taste experience, taste wisdom, taste refinement. Taste slowly, enjoy the simple and profound taste of this aged beef and recipe'
	),
	new Meal(
		'Pan Pizza',
		10.0,
		'/meals/panPizza.jpg',
		'Pananananananana Pan Pizza.. he is your hero you need but do not deserve'
	),
	new Meal(
		'Sala mi and you',
		13.95,
		'/meals/salamiPizza.jpg',
		'Sala mi and you is the best vegan piza there is. You can not believe its not regular salami. But it is, its jackfruit based and no dream'
	)
];
