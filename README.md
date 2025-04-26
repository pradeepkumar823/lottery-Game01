# 🎲 Dynamic Lottery Game - React App
A fun and customizable Lottery Game built with React! Buy a ticket and try your luck — if the sum of the numbers matches the winning sum, you win! 🎉

## 🚀 Features
- ✅ Dynamic ticket size (`n`): You decide how many numbers your ticket will have!
- ✅ Custom winning condition (`winningSum`): Set your own lucky sum!
- ✅ Generates random tickets every time
- ✅ Checks for winning tickets automatically
- ✅ Stores and displays all winning tickets
- ✅ Clean, modular code (separate `Ticket` component)
- ✅ Simple, responsive UI

## 🛠️ How to Customize
You can easily change:
- Number of ticket numbers (`n`)
- Target winning sum (`winningSum`)
Just update the props in `App.js`:
```javascript
function App() {
  return (
    <>
      <Lottery n={5} winningSum={20} />
    </>
  );
}


![App Screenshot](./screenshot.png)


## 📂 Folder Structure
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── Lottery.js
│   ├── Ticket.js
│   ├── helper.js
│   ├── App.css
│   └── index.js
├── README.md
└── package.json
