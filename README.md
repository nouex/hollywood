# Stukent React Challenge

Thank you for taking the time to complete the Stukent React Challenge. This challenge is designed to help us understand the boundaries of your current knowledge as well as assess how well you are able to learn new things. We really hope that you take your time and do a great job. There is no time limit to the challenge but we ask you to return the challenge to us quickly so that we can move forward with the hiring process.

## The Challenge

We have created a very basic and not very well written example of a React application. The idea is simple. We have a box for entering a message. Once the message has been entered and the user pushes the button, the message is shown above. When a user enters another message, that message is shown below the previous message. When the page refreshes, all the messages are lost.

You will attempt to complete the outlined steps below. **For each step there should be at least 1 git commit so that the history of the application can be viewed at each step. If you cannot complete the step, create a commit message for that step and explain where you got stuck and why in the commit message. Then proceed to the next step.**

1. Install [Nodejs version 6.x.x](https://nodejs.org)
1. Clone this repository and get the app running. To do this, run the following commands:
    ```
    npm install -g create-react-app
    cd hollywood
    yarn install
    yarn start
    ```

1. Remove the tag that is printing the "To get started, ..." line.
1. Refactor the ChatWindow component by extracting `ul` tag that displays the chat items into its own component. Make sure the application still works as it did previously.
1. Make the chats display the time next to each message. Make sure the formatting of the time is "HH:MM:SS AM/PM". For example:
    ```text
    10:45:34 PM: "Hello, world"
    10:45:55 PM: "Hello back!"
    ```

1. Add the `moment.js` library to the application.

1. Change the timestamp to give a relative time, such as "1 second ago" using
   the moment.js library you installed earlier. It should update in real-time
   counting up to 1 minute and then it should change to "1 minute ago". Hint: You will need to implement a tick function so that the timestamps keep updating in real time. [Checkout "A Stateful Component" for some help](https://facebook.github.io/react/).

1. Create a new component, or components, that will allow you to choose from a selection of emoji from a list. When the user selects the emoji, it should be added to the end of the message. The user should be able to add additional text or emojis to the message before sending it.

1. Update the look and feel of the application so that it looks professional. Be creative here and show us what you can do with CSS. Make it something that you would be proud to show off. Use react components as much as you can in your design. Bonus points for:
    * using sass/scss or less
    * adding a new logo or images
    * using a non-web-stardard font
    * using a css framework such as [Spectre](https://picturepan2.github.io/spectre/) or Bootstrap

1. If necessary, refactor your application so that you only have 1 component per file.


## Getting Help

The `HELP.md` file in the project has the original instructions for the create-react-app that was used to create this challenge. It is loaded with useful information that will help you along the way.

Please do not be afraid to reach out via email if you have any questions.


## Challenge Submission
When you are complete with the challenge please follow the following steps:

* Commit your latest changes and add a meaningful commit message
* Delete the `node_modules` directory
* Zip up the hollywood directory into a file named `[YOUR_NAME]_hollywood.zip`
* Email the zip file or provide a download link to mike@stukent.com

That's it! We will be in contact with you within the next 1-3 business days.
