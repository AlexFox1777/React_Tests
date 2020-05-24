## React testing

Testing React components are usually pretty straight forward - we "render" the component (sometimes with props), and check if its output matches our expectations. If the component is interactive, we will simulate the user interactions (events) and see if it behaves correctly.

### Strategies

 1. Testing props: As a rule, I divide the testing of the props into two tests: 
 
 - Firstly, check the render of default prop values; when the component is rendered, I expect a value to be equal from defaultPropsin case this prop has defaultProps. 
 - Secondly, check the custom value of the prop; I set my own value and expect it to be received after the render of the component.


 2. Event testing: After creating a snapshot and covering props with tests, you can be sure in correct rendering of the component, but this is not enough for full coverage in case you have events in the component.
 
 You can check event in several ways, the most widely used are:

- mock event => simulate it => expect event was called
- mock event => simulate event with params => expect event was called with passed params
- pass necessary props => render component => simulate event => expect a certain behavior on called event

### Tips 

1. Test the outcomes, not the implementation. Treat the components/functions you are testing like black boxes - we feed it with data and check what we are getting back - try to avoid testing implementation details.

2. Tests should be isolated. A test should not affect other tests in any way, nor should it depend on any code inside another test.

3. Tests should be deterministic. Given the same input, a test should always give the same results.

