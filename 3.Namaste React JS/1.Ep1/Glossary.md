# React.js Glossary - Complete Reference Guide

---

## **CORE CONCEPTS**

| Term | Definition | Example |
|------|------------|---------|
| **Component** | Reusable UI building block (function or class) | function Welcome({ name }) {<br>&nbsp;&nbsp;return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;<br>}<br>&lt;Welcome name="Alice" /&gt; |
| **JSX** | JavaScript XML syntax for writing HTML in JS | const element = (<br>&nbsp;&nbsp;&lt;div className="container"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;{title}&lt;/h1&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;{content}&lt;/p&gt;<br>&nbsp;&nbsp;&lt;/div&gt;<br>); |
| **Props** | Read-only data passed from parent to child | function Card({ title, description }) {<br>&nbsp;&nbsp;return (<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;{title}&lt;/h2&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;{description}&lt;/p&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>&nbsp;&nbsp;);<br>} |
| **State** | Mutable data managed within component | import { useState } from 'react';<br><br>function Counter() {<br>&nbsp;&nbsp;const [count, setCount] = useState(0);<br>&nbsp;&nbsp;return &lt;button onClick={() => setCount(count + 1)}&gt;{count}&lt;/button&gt;;<br>} |
| **Virtual DOM** | In-memory representation of UI for efficient updates | // React compares Virtual DOM with real DOM<br>// and updates only changed elements<br>// automatically handled by React |
| **Fragment** | Group elements without adding extra DOM nodes | import { Fragment } from 'react';<br><br>return (<br>&nbsp;&nbsp;&lt;Fragment&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Title&lt;/h1&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Text&lt;/p&gt;<br>&nbsp;&nbsp;&lt;/Fragment&gt;<br>);<br>// Shorthand: &lt;&gt;...&lt;/&gt; |
| **Children** | Content passed between component opening/closing tags | function Card({ children }) {<br>&nbsp;&nbsp;return &lt;div className="card"&gt;{children}&lt;/div&gt;;<br>}<br><br>&lt;Card&gt;&lt;h1&gt;Title&lt;/h1&gt;&lt;p&gt;Text&lt;/p&gt;&lt;/Card&gt; |
| **Key** | Unique identifier for list items (helps React track changes) | const items = ['a', 'b', 'c'];<br>return (<br>&nbsp;&nbsp;&lt;ul&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;{items.map((item, i) => (<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li key={i}&gt;{item}&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;))}<br>&nbsp;&nbsp;&lt;/ul&gt;<br>); |

---

## **HOOKS (FUNCTION COMPONENTS)**

| Term | Definition | Example |
|------|------------|---------|
| **useState** | Adds state to functional components | const [name, setName] = useState('Alice');<br>const [count, setCount] = useState(0);<br>const [user, setUser] = useState({ id: 1, name: 'Bob' }); |
| **useEffect** | Performs side effects (data fetching, subscriptions, timers) | useEffect(() => {<br>&nbsp;&nbsp;document.title = `Count: ${count}`;<br>&nbsp;&nbsp;return () => console.log('cleanup');<br>}, [count]); // runs when count changes |
| **useContext** | Accesses context values without wrapping | const ThemeContext = createContext('light');<br><br>function Button() {<br>&nbsp;&nbsp;const theme = useContext(ThemeContext);<br>&nbsp;&nbsp;return &lt;button className={theme}&gt;Click&lt;/button&gt;;<br>} |
| **useRef** | Creates mutable reference that persists across renders | const inputRef = useRef(null);<br><br>const focusInput = () => {<br>&nbsp;&nbsp;inputRef.current.focus();<br>};<br><br>return &lt;input ref={inputRef} /&gt;; |
| **useMemo** | Memoizes expensive computations | const expensiveValue = useMemo(() => {<br>&nbsp;&nbsp;return computeExpensiveValue(a, b);<br>}, [a, b]); // only recomputes when a or b changes |
| **useCallback** | Memoizes functions to prevent unnecessary re-creation | const handleClick = useCallback(() => {<br>&nbsp;&nbsp;console.log(count);<br>}, [count]);<br><br>&lt;Child onClick={handleClick} /&gt; |
| **useReducer** | Manages complex state logic (alternative to useState) | const [state, dispatch] = useReducer(reducer, initialState);<br><br>function reducer(state, action) {<br>&nbsp;&nbsp;switch(action.type) {<br>&nbsp;&nbsp;&nbsp;&nbsp;case 'increment': return { count: state.count + 1 };<br>&nbsp;&nbsp;&nbsp;&nbsp;default: return state;<br>&nbsp;&nbsp;}<br>} |
| **useLayoutEffect** | Fires synchronously after DOM mutations (before paint) | useLayoutEffect(() => {<br>&nbsp;&nbsp;const height = divRef.current.offsetHeight;<br>&nbsp;&nbsp;setHeight(height);<br>}, []); // measure DOM before browser paints |
| **useImperativeHandle** | Customizes ref value exposed to parent | useImperativeHandle(ref, () => ({<br>&nbsp;&nbsp;focus: () => inputRef.current.focus(),<br>&nbsp;&nbsp;clear: () => inputRef.current.value = ''<br>})); |
| **Custom Hook** | Reusable stateful logic extracted into function | function useLocalStorage(key, initial) {<br>&nbsp;&nbsp;const [value, setValue] = useState(<br>&nbsp;&nbsp;&nbsp;&nbsp;localStorage.getItem(key) ?? initial<br>&nbsp;&nbsp;);<br>&nbsp;&nbsp;useEffect(() => {<br>&nbsp;&nbsp;&nbsp;&nbsp;localStorage.setItem(key, value);<br>&nbsp;&nbsp;}, [key, value]);<br>&nbsp;&nbsp;return [value, setValue];<br>} |

---

## **COMPONENT LIFECYCLE**

| Term | Definition | Example |
|------|------------|---------|
| **Mounting** | Component is created and inserted into DOM | useEffect(() => {<br>&nbsp;&nbsp;console.log('Component mounted');<br>&nbsp;&nbsp;fetchData();<br>}, []); // empty array = mount only |
| **Updating** | Component re-renders due to props/state changes | useEffect(() => {<br>&nbsp;&nbsp;console.log('Count updated:', count);<br>}, [count]); // runs when count changes |
| **Unmounting** | Component is removed from DOM | useEffect(() => {<br>&nbsp;&nbsp;const timer = setInterval(() => {}, 1000);<br>&nbsp;&nbsp;return () => clearInterval(timer); // cleanup<br>}, []); |
| **componentDidMount** | Class lifecycle - runs after first render | class MyComponent extends React.Component {<br>&nbsp;&nbsp;componentDidMount() {<br>&nbsp;&nbsp;&nbsp;&nbsp;this.fetchData();<br>&nbsp;&nbsp;}<br>} |
| **componentDidUpdate** | Class lifecycle - runs after updates | componentDidUpdate(prevProps, prevState) {<br>&nbsp;&nbsp;if (prevProps.id !== this.props.id) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this.fetchData();<br>&nbsp;&nbsp;}<br>} |
| **componentWillUnmount** | Class lifecycle - cleanup before removal | componentWillUnmount() {<br>&nbsp;&nbsp;clearInterval(this.timer);<br>&nbsp;&nbsp;this.subscription.unsubscribe();<br>} |
| **shouldComponentUpdate** | Optimizes by preventing unnecessary renders | shouldComponentUpdate(nextProps, nextState) {<br>&nbsp;&nbsp;return nextProps.id !== this.props.id;<br>} |

---

## **EVENT HANDLING**

| Term | Definition | Example |
|------|------------|---------|
| **Synthetic Event** | React's cross-browser event wrapper | function handleClick(event) {<br>&nbsp;&nbsp;event.preventDefault();<br>&nbsp;&nbsp;console.log(event.target.value);<br>}<br><br>&lt;button onClick={handleClick}&gt;Click&lt;/button&gt; |
| **Event Binding** | Ensuring correct 'this' context in class components | class MyComponent extends React.Component {<br>&nbsp;&nbsp;constructor() {<br>&nbsp;&nbsp;&nbsp;&nbsp;super();<br>&nbsp;&nbsp;&nbsp;&nbsp;this.handleClick = this.handleClick.bind(this);<br>&nbsp;&nbsp;}<br>} |
| **Arrow Function Handler** | Inline event handler (creates new function each render) | &lt;button onClick={() => setCount(count + 1)}&gt;<br>&nbsp;&nbsp;Increment<br>&lt;/button&gt; |
| **Event Pooling** | React reuses event objects for performance (legacy) | // In React 17+, event pooling removed<br>// event.persist() no longer needed |

---

## **CONDITIONAL RENDERING**

| Term | Definition | Example |
|------|------------|---------|
| **If Statement** | Conditional rendering using JavaScript if | function Greeting({ isLoggedIn }) {<br>&nbsp;&nbsp;if (isLoggedIn) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return &lt;h1&gt;Welcome back!&lt;/h1&gt;;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return &lt;h1&gt;Please sign in&lt;/h1&gt;;<br>} |
| **Ternary Operator** | Inline conditional expression | return (<br>&nbsp;&nbsp;&lt;div&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;{isLoggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;}<br>&nbsp;&nbsp;&lt;/div&gt;<br>); |
| **Logical AND (&&)** | Render element only if condition is true | return (<br>&nbsp;&nbsp;&lt;div&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;{hasError && &lt;ErrorMessage /&gt;}<br>&nbsp;&nbsp;&nbsp;&nbsp;{isLoading && &lt;Spinner /&gt;}<br>&nbsp;&nbsp;&lt;/div&gt;<br>); |
| **Nullish Rendering** | Show fallback when value is null/undefined | return (<br>&nbsp;&nbsp;&lt;div&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;{userName ?? 'Guest'}<br>&nbsp;&nbsp;&lt;/div&gt;<br>); |

---

## **LISTS & KEYS**

| Term | Definition | Example |
|------|------------|---------|
| **map()** | Transform array into list of JSX elements | const todos = ['Learn React', 'Build App'];<br>return (<br>&nbsp;&nbsp;&lt;ul&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;{todos.map((todo, i) => (<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li key={i}&gt;{todo}&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;))}<br>&nbsp;&nbsp;&lt;/ul&gt;<br>); |
| **Key Prop** | Unique identifier to help React track list items | const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];<br>return users.map(user => (<br>&nbsp;&nbsp;&lt;User key={user.id} {...user} /&gt;<br>)); |
| **Index as Key** | Using array index (avoid if list can reorder) | // ⚠️ Not recommended for dynamic lists<br>items.map((item, index) => (<br>&nbsp;&nbsp;&lt;div key={index}&gt;{item}&lt;/div&gt;<br>)) |

---

## **FORMS & INPUTS**

| Term | Definition | Example |
|------|------------|---------|
| **Controlled Component** | Input value controlled by React state | const [name, setName] = useState('');<br><br>return (<br>&nbsp;&nbsp;&lt;input<br>&nbsp;&nbsp;&nbsp;&nbsp;value={name}<br>&nbsp;&nbsp;&nbsp;&nbsp;onChange={(e) => setName(e.target.value)}<br>&nbsp;&nbsp;/&gt;<br>); |
| **Uncontrolled Component** | Input manages its own state (use refs) | const inputRef = useRef();<br><br>const handleSubmit = () => {<br>&nbsp;&nbsp;console.log(inputRef.current.value);<br>};<br><br>return &lt;input ref={inputRef} defaultValue="text" /&gt;; |
| **Form Submission** | Handling form submit events | const handleSubmit = (e) => {<br>&nbsp;&nbsp;e.preventDefault();<br>&nbsp;&nbsp;const formData = new FormData(e.target);<br>&nbsp;&nbsp;console.log(Object.fromEntries(formData));<br>};<br><br>&lt;form onSubmit={handleSubmit}&gt;...&lt;/form&gt; |

---

## **STYLING**

| Term | Definition | Example |
|------|------------|---------|
| **Inline Styles** | Styles as JavaScript object | const divStyle = {<br>&nbsp;&nbsp;color: 'blue',<br>&nbsp;&nbsp;backgroundColor: 'lightgray',<br>&nbsp;&nbsp;fontSize: '16px'<br>};<br><br>&lt;div style={divStyle}&gt;Styled&lt;/div&gt; |
| **CSS Modules** | Scoped CSS files (filename.module.css) | import styles from './Button.module.css';<br><br>function Button() {<br>&nbsp;&nbsp;return (<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;button className={styles.primary}&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;<br>&nbsp;&nbsp;);<br>} |
| **className** | Applying CSS classes (note: not 'class') | &lt;div className="container primary"&gt;<br>&nbsp;&nbsp;Content<br>&lt;/div&gt;<br><br>// Conditional classes<br>&lt;div className={`btn ${isActive ? 'active' : ''}`}&gt; |
| **Styled Components** | CSS-in-JS library for component styling | import styled from 'styled-components';<br><br>const Button = styled.button`<br>&nbsp;&nbsp;background: blue;<br>&nbsp;&nbsp;color: white;<br>&nbsp;&nbsp;padding: 10px;<br>`;<br><br>&lt;Button&gt;Click&lt;/Button&gt; |

---

## **CONTEXT API**

| Term | Definition | Example |
|------|------------|---------|
| **createContext** | Creates context object for sharing data | const ThemeContext = createContext('light');<br>const UserContext = createContext(null); |
| **Provider** | Supplies context value to child components | &lt;ThemeContext.Provider value="dark"&gt;<br>&nbsp;&nbsp;&lt;App /&gt;<br>&lt;/ThemeContext.Provider&gt; |
| **Consumer** | Consumes context value (legacy pattern) | &lt;ThemeContext.Consumer&gt;<br>&nbsp;&nbsp;{theme => &lt;div&gt;Current theme: {theme}&lt;/div&gt;}<br>&lt;/ThemeContext.Consumer&gt; |
| **useContext** | Hook to consume context in functional components | const theme = useContext(ThemeContext);<br>const user = useContext(UserContext); |

---

## **REFS**

| Term | Definition | Example |
|------|------------|---------|
| **useRef** | Creates mutable object that persists across renders | const countRef = useRef(0);<br>const divRef = useRef(null);<br><br>countRef.current += 1; // doesn't trigger re-render |
| **forwardRef** | Passes ref from parent to child component | const FancyInput = forwardRef((props, ref) => (<br>&nbsp;&nbsp;&lt;input ref={ref} {...props} /&gt;<br>));<br><br>const inputRef = useRef();<br>&lt;FancyInput ref={inputRef} /&gt; |
| **Ref Callback** | Function called with DOM element when mounted | &lt;div ref={(node) => {<br>&nbsp;&nbsp;if (node) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log('height:', node.offsetHeight);<br>&nbsp;&nbsp;}<br>}}&gt; |

---

## **OPTIMIZATION**

| Term | Definition | Example |
|------|------------|---------|
| **React.memo** | Prevents re-render if props haven't changed | const MemoizedComponent = React.memo(({ name }) => {<br>&nbsp;&nbsp;return &lt;div&gt;{name}&lt;/div&gt;;<br>});<br><br>// Custom comparison<br>React.memo(Component, (prevProps, nextProps) => {<br>&nbsp;&nbsp;return prevProps.id === nextProps.id;<br>}); |
| **useMemo** | Memoizes computed values | const sortedUsers = useMemo(() => {<br>&nbsp;&nbsp;return users.sort((a, b) => a.name.localeCompare(b.name));<br>}, [users]); |
| **useCallback** | Memoizes callback functions | const handleClick = useCallback(() => {<br>&nbsp;&nbsp;doSomething(a, b);<br>}, [a, b]); |
| **Lazy Loading** | Code-splitting to load components on demand | const LazyComponent = lazy(() => import('./Heavy'));<br><br>&lt;Suspense fallback={&lt;Loading /&gt;}&gt;<br>&nbsp;&nbsp;&lt;LazyComponent /&gt;<br>&lt;/Suspense&gt; |
| **Code Splitting** | Split bundle into smaller chunks | import { lazy, Suspense } from 'react';<br>const About = lazy(() => import('./About'));<br>const Contact = lazy(() => import('./Contact')); |
| **PureComponent** | Class component with shallow prop/state comparison | class MyComponent extends React.PureComponent {<br>&nbsp;&nbsp;render() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return &lt;div&gt;{this.props.name}&lt;/div&gt;;<br>&nbsp;&nbsp;}<br>} |

---

## **ERROR HANDLING**

| Term | Definition | Example |
|------|------------|---------|
| **Error Boundary** | Class component that catches errors in child tree | class ErrorBoundary extends React.Component {<br>&nbsp;&nbsp;constructor(props) {<br>&nbsp;&nbsp;&nbsp;&nbsp;super(props);<br>&nbsp;&nbsp;&nbsp;&nbsp;this.state = { hasError: false };<br>&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;static getDerivedStateFromError(error) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return { hasError: true };<br>&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;componentDidCatch(error, errorInfo) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(error, errorInfo);<br>&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;render() {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (this.state.hasError) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &lt;h1&gt;Something went wrong&lt;/h1&gt;;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;return this.props.children;<br>&nbsp;&nbsp;}<br>} |
| **getDerivedStateFromError** | Updates state when error is caught | static getDerivedStateFromError(error) {<br>&nbsp;&nbsp;return { hasError: true, error };<br>} |
| **componentDidCatch** | Logs error information | componentDidCatch(error, info) {<br>&nbsp;&nbsp;logErrorToService(error, info.componentStack);<br>} |

---

## **PORTALS**

| Term | Definition | Example |
|------|------------|---------|
| **createPortal** | Renders children into DOM node outside parent | import { createPortal } from 'react-dom';<br><br>function Modal({ children }) {<br>&nbsp;&nbsp;return createPortal(<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="modal"&gt;{children}&lt;/div&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('modal-root')<br>&nbsp;&nbsp;);<br>} |

---

## **HIGHER-ORDER COMPONENTS (HOC)**

| Term | Definition | Example |
|------|------------|---------|
| **HOC** | Function that takes component and returns enhanced component | function withLoading(Component) {<br>&nbsp;&nbsp;return function WithLoadingComponent({ isLoading, ...props }) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (isLoading) return &lt;Spinner /&gt;;<br>&nbsp;&nbsp;&nbsp;&nbsp;return &lt;Component {...props} /&gt;;<br>&nbsp;&nbsp;};<br>}<br><br>const UserListWithLoading = withLoading(UserList); |

---

## **RENDER PROPS**

| Term | Definition | Example |
|------|------------|---------|
| **Render Props** | Pattern where component takes function that returns element | function Mouse({ render }) {<br>&nbsp;&nbsp;const [pos, setPos] = useState({ x: 0, y: 0 });<br><br>&nbsp;&nbsp;useEffect(() => {<br>&nbsp;&nbsp;&nbsp;&nbsp;const handler = (e) => setPos({ x: e.clientX, y: e.clientY });<br>&nbsp;&nbsp;&nbsp;&nbsp;window.addEventListener('mousemove', handler);<br>&nbsp;&nbsp;&nbsp;&nbsp;return () => window.removeEventListener('mousemove', handler);<br>&nbsp;&nbsp;}, []);<br><br>&nbsp;&nbsp;return render(pos);<br>}<br><br>&lt;Mouse render={({ x, y }) => (<br>&nbsp;&nbsp;&lt;h1&gt;Mouse at {x}, {y}&lt;/h1&gt;<br>)} /&gt; |

---

## **REACT ROUTER (COMMON LIBRARY)**

| Term | Definition | Example |
|------|------------|---------|
| **BrowserRouter** | Router using HTML5 history API | import { BrowserRouter } from 'react-router-dom';<br><br>&lt;BrowserRouter&gt;<br>&nbsp;&nbsp;&lt;App /&gt;<br>&lt;/BrowserRouter&gt; |
| **Route** | Renders component when path matches | import { Route } from 'react-router-dom';<br><br>&lt;Route path="/about" element={&lt;About /&gt;} /&gt; |
| **Link** | Navigation without page reload | import { Link } from 'react-router-dom';<br><br>&lt;Link to="/contact"&gt;Contact Us&lt;/Link&gt; |
| **useNavigate** | Programmatic navigation hook | import { useNavigate } from 'react-router-dom';<br><br>const navigate = useNavigate();<br>navigate('/home'); |
| **useParams** | Access URL parameters | import { useParams } from 'react-router-dom';<br><br>function User() {<br>&nbsp;&nbsp;const { id } = useParams();<br>&nbsp;&nbsp;return &lt;div&gt;User ID: {id}&lt;/div&gt;;<br>} |

---

## **TESTING**

| Term | Definition | Example |
|------|------------|---------|
| **React Testing Library** | Testing utilities focused on user behavior | import { render, screen } from '@testing-library/react';<br><br>test('renders button', () => {<br>&nbsp;&nbsp;render(&lt;Button /&gt;);<br>&nbsp;&nbsp;expect(screen.getByText('Click')).toBeInTheDocument();<br>}); |
| **Jest** | JavaScript testing framework | test('adds 1 + 2 to equal 3', () => {<br>&nbsp;&nbsp;expect(sum(1, 2)).toBe(3);<br>}); |
| **fireEvent** | Simulates user interactions | import { fireEvent } from '@testing-library/react';<br><br>fireEvent.click(screen.getByText('Submit'));<br>fireEvent.change(input, { target: { value: 'test' } }); |

---

## **REACT 18+ FEATURES**

| Term | Definition | Example |
|------|------------|---------|
| **Concurrent Rendering** | React can pause and resume work for better UX | // Automatically enabled in React 18<br>// with createRoot() |
| **useTransition** | Marks state updates as non-urgent | const [isPending, startTransition] = useTransition();<br><br>startTransition(() => {<br>&nbsp;&nbsp;setSearchQuery(input);<br>}); |
| **useDeferredValue** | Defers updating value for better performance | const deferredQuery = useDeferredValue(searchQuery);<br><br>return &lt;SearchResults query={deferredQuery} /&gt;; |
| **Suspense** | Shows fallback while component loads | &lt;Suspense fallback={&lt;Loading /&gt;}&gt;<br>&nbsp;&nbsp;&lt;ProfileDetails /&gt;<br>&lt;/Suspense&gt; |
| **useId** | Generates unique IDs for accessibility | const id = useId();<br><br>return (<br>&nbsp;&nbsp;&lt;&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;label htmlFor={id}&gt;Name&lt;/label&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id={id} /&gt;<br>&nbsp;&nbsp;&lt;/&gt;<br>); |

---

## **BEST PRACTICES**

| Term | Definition | Example |
|------|------------|---------|
| **Component Composition** | Build complex UIs from simple components | function Card({ header, body, footer }) {<br>&nbsp;&nbsp;return (<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{header && &lt;CardHeader&gt;{header}&lt;/CardHeader&gt;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CardBody&gt;{body}&lt;/CardBody&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{footer && &lt;CardFooter&gt;{footer}&lt;/CardFooter&gt;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>&nbsp;&nbsp;);<br>} |
| **Props Destructuring** | Extract props for cleaner code | // Instead of: props.name, props.age<br>function User({ name, age, email = 'N/A' }) {<br>&nbsp;&nbsp;return &lt;div&gt;{name}, {age}, {email}&lt;/div&gt;;<br>} |
| **Prop Types** | Runtime type checking for props | import PropTypes from 'prop-types';<br><br>Button.propTypes = {<br>&nbsp;&nbsp;onClick: PropTypes.func.isRequired,<br>&nbsp;&nbsp;label: PropTypes.string,<br>&nbsp;&nbsp;disabled: PropTypes.bool<br>}; |
| **Default Props** | Fallback values for props | Button.defaultProps = {<br>&nbsp;&nbsp;label: 'Click Me',<br>&nbsp;&nbsp;disabled: false<br>}; |

---

**Pro Tip**: This guide covers React fundamentals through advanced patterns. Pair with the JavaScript Glossary for complete mastery! ⚛️
