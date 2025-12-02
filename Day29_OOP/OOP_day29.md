1. Identify Real-Life Objects with OOP Concepts 
a.Smartphone
    Behaviors: height, weight, color
    methods: playMusic, callPerson, recordVideos
    b.Bike
    -model,color,brand
    -brake(),headlight(),startEngine()
    c. Vending Machine
    -color,size,type
    -takeCoins,giveItems,returnMoney()

3.  Explain OOP Principles with Human Analogies
Abstraction: hiding complex details
             Consider there is a remote you use to turn your TV on. There are several keys which you use as per your needs and you don't care or want to know  what happens under the hood. This aspect of OOP hiding the complex details is considered as an abstraction.

Encapsulation: Bundling Similar methods or features in one class 
               When you visit department store you can find vegetables or fruits in one  place, your cosmetics in one section and your daily groceries in another section. So, the similar type of  things are bundled  in oneplace not zigzag. This attribute of OOP is called encapsulation.

Inheritance: simply you inheriting some attributes of your parents.
            We as a human being we inherit characteristics of our ancestors. This feature of OOP is called inheritance.
            It generally shows the _is a relationship.

Polymorphism: having many forms 
              One person has different forms or serve different role. Like in a home you might be a son or daughter and you fill your similar role. In school you might be student you act according  which illustrates the characteristics  of OOP that one object of different classes might behave different;y on thei class-specific implementations.

Composition: making one item from different tools.
             One car has different elements like engine, horn, wheels, brakes or  other different parts. But enginner combines all  of them  and gives one whole thing called car. So composing objects of other classes can be considered as composition. This shows has a relationsip like:
             Car has a engine
             Car has a brakes.

2. Draw a Diagram of an OOP Modeled System

Potential  Library system: 

                   ┌─────────────────────┐
                   │       Book           │
                   │──────────────────────│
                   │ - title              │
                   │ - author             │
                   │ - category           │
                   │──────────────────────│
                   │ + getDetails()       │
                   └──────────────────────┘
                             ▲
                             │ (Composition: Library HAS Books)
                             │
                ┌──────────────────────────┐
                │         Library           │
                │──────────────────────────│
                │ - books[]                │
                │ - members[]              │
                │ - staff[]                │
                │──────────────────────────│
                │ + addBook()              │
                │ + registerMember()       │
                │ + assignStaff()          │
                └──────────────────────────┘
                             ▲
         ┌───────────────────┼────────────────────────┐
         │                   │                        │
 (Composition)      (Composition)             (Composition)
 Library HAS Members  Library HAS Staff        Library HAS Books


                        ┌───────────────────────┐
                        │        Member          │
                        │────────────────────────│
                        │ - fee                  │
                        │────────────────────────│
                        │ + premiumAccess()      │
                        └────────────────────────┘
                           ▲               ▲
                           │               │
                           │ (Inheritance) │ (Inheritance)
                           │               │
        ┌────────────────────────┐   ┌────────────────────────┐
        │       VIPMember        │   │      VVIPMember        │
        │────────────────────────│   │────────────────────────│
        │ - extraBenefits        │   │ - loungeAccess         │
        │────────────────────────│   │────────────────────────│
        │ + vipFeatures()        │   │ + vvipFeatures()       │
        └────────────────────────┘   └────────────────────────┘


                    ┌─────────────────────┐
                    │        Staff         │
                    │──────────────────────│
                    │ - dutyHours          │
                    │──────────────────────│
                    │ + sectionToLook()    │
                    └──────────────────────┘


5. OOP vs functional way
ALarm clock in functional way:
    One function to start clock
    Another to fetch time
    Another to display time
    Another to ring When time Matches

SImilarly IN an OOP way:
One class called Alarm Clock
    One Method to fetch time
    One method to update time
    Another to display tme
    Another to ring all  inside one class

4. Teach class, object and method

class = blueprint it has its own methods and behaviors
        recipe for making sth

object = a item that you create using the class properties
         following that recipe to cook

method = functions that are used in classes or objects
         act like cooking, turning on Stove