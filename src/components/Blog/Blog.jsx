import React from 'react';

const Blog = () => {
    return (
        <div>
        <div  className='AllQuestionDesign'>
          <h2>1.When should you use context API?</h2>
           <p>
           Props and state are two important concepts used in React, a popular JavaScript library for building user interfaces <br></br><p>
            Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. Props are passed as an object and are used to customize the behavior of a component based on the data they contain.
            </p>
             <p>State, on the other hand, is used to manage the internal state of a component. It is a mutable object that can be updated by the component itself. State is used to manage user interactions, handle form input, and update the UI based on changes in the data </p> Main difference between props and state is that props are passed down from a parent component and are read-only, while state is managed by the component itself and can be updated.
           </p>



          <h2> 2.What is a custom hook?</h2>
         
         <p>
         useState is a React Hook that allows you to add state to a functional component. we pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called

         </p>



          <h2>3.What is useRef?</h2>
           
           <p>
           The useEffect hook in React is primarily used to perform side effects in functional components. A side effect is any operation that modifies something outside the component, such as updating the title of the document, subscribing to an external data source, or adding an event listener to the window object.

           Here is Some Example       
  Animating a component. If you want to animate a component based on its state orprops  Cleaning up after a component.  we might want to perform some cleanup tasks, such  as removing event listeners 
           </p>



       <h2>4.What is useMemo?</h2>
      <p>
      React is a JavaScript library that allows you to build user interfaces by creating reusable components1. It works by creating a virtual representation of the DOM  called the Virtual DOM2. When a components state changes, React updates the Virtual DOM and then compares it with the previous version of the Virtual DOM to determine what has changed2. It then updates only those parts of the actual DOM that have changed2. This makes React very fast and efficient
      <p>Under The Below React Some Ways Are work:</p>
      React compares the current Virtual DOM to the previous Virtual DOM to determine what has changed. This process is called reconciliation.<br></br> Based on the changes that have occurred, React updates the actual DOM to reflect the new state of the UI.<br></br>If the state of your application changes, React re-renders the affected components, updates the Virtual DOM, and performs reconciliation again.

   

    

      </p>

        </div> 





 </div>
    );
};

export default Blog;

