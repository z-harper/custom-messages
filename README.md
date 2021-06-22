# Demo Messages 

## Ways to run program

Clone project to workspace.\
In the project directory, run npm install to install packages.\
Then can run either of the below commands to start app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run dev`

Launches app using nodemon so changes can be made without restarting server.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Design decisions

App was designed using Express and EJS. I wanted to keep the project\
lightweight, but also wanted to be able to interact with it with a GUI. That is\
what led to the decision to use Express and EJS, rather than just JavaSCript.

Designed similar to an MVC architecture without the models.\
Models could be implemented for companies and guests. Basic framework set up <br /> 
so that the app can be easily exapnded to include different pages.

## Languages Used

Code is written in JavaScript, EJS, and minimal CSS. I've been working with \
JavaScript the last few months and enjoy the language, so that drove my \
decision. I used EJS to be able to interact with the program in a browser.

## Verifying correctness

I verified correctness by checking the output of the message with the selected\
message template, guest, and company. I most likely would have made specific\
tests had the Companies.json and Guests.json data files been larger. To ensure\
the correct companies and guests were being chosen, guest and company id's \
were used when sending data to the server. This erases confusion if there are \
guests or companies with the same name. I also included the room number on \
the guest dropdown to help the user when creating messages. 

## What I didn't get to / would do with more time

1. Add more message templates
2. Ability for user to create, update and delete existing templates
3. Ability for user to mass send a message to multiple guests
4. Styling
