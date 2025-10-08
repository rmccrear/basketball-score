# Basketball Score Tracker 🏀

Refer to the code in [/src/App.jsx](./src/App.jsx).

A simple React application designed to help students learn core React concepts through a fun, interactive basketball scoring app.

## 📚 What You'll Learn

This teaching demo covers several fundamental React concepts:

### 1. **State Management with useState**
Learn how to use React's `useState` hook to track and update the basketball score in real-time.
- [Learn about Updating the Screen →](https://react.dev/learn#updating-the-screen)

### 2. **Event Handling**
Understand how to respond to user interactions with button clicks to increment the score.
- [Learn about Responding to Events →](https://react.dev/learn#responding-to-events)

### 3. **Adding Styles**
Explore two different ways to style React components:
- **CSS Classes**: Using Bootstrap classes like `btn btn-primary`
- **Inline Styles**: Using JavaScript objects with the `style` prop
- [Learn about Adding Styles →](https://react.dev/learn#adding-styles)

### 4. **Conditional Rendering**
Display different UI elements based on the current score:
- Using `if/else` statements to conditionally assign JSX
- Using ternary operators (`? :`) for inline conditional rendering
- [Learn about Conditional Rendering →](https://react.dev/learn#conditional-rendering)
- [Learn about the Ternary Operator →](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

## 🎯 Features

- **Free Throw**: Add 1 point to the score
- **Two Point Shot**: Add 2 points to the score
- **Three Pointer**: Add 3 points to the score
- **Reset Score**: Reset the score back to 0
- **Win Condition**: Special message appears when score exceeds 100!

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## 💡 Key Concepts to Explore

### State Hook
```javascript
const [score, setScore] = useState(0)
```
- `score` is the current value
- `setScore` is the function to update the value
- `0` is the initial value

### Event Handlers
```javascript
function threePointShot() {
  setScore(score + 3)
}
```
Functions that respond to user interactions and update state.

### Inline Styles
```javascript
const headerStyle = {
  backgroundColor: "blue",
  color: "white",
  padding: "1em"
}
```
JavaScript objects that define CSS properties using camelCase.

### Conditional Rendering
```javascript
{score < 100 ? <h2>Keep Working</h2> : <h2>Congratulations</h2>}
```
Show different content based on conditions.

## 📖 Additional Resources

- [React Quick Start Guide](https://react.dev/learn)
- [useState Hook Reference](https://react.dev/reference/react/useState)
- [React Developer Tools](https://react.dev/learn/react-developer-tools)

## 🎓 Learning Path

This demo was built incrementally to demonstrate different concepts:
1. Setting up a basic React component
2. Adding Bootstrap for styling
3. Implementing inline styles with JSX
4. Adding conditional rendering based on score

Try modifying the code to practice:
- Change the win condition threshold
- Add different styling based on score ranges
- Create new button types (e.g., a deduction for missed shots)
- Add a timer or shot counter

Happy coding! 🚀

