# Object diffing

## Philosophy
The purpose of this package is to deep diff two objects.
It will compare two objects and then output an object with
all the changes between them.

The intent was to use it with React but it can be used solo.

In order to improve a react component performance the method that's
often used is 'shouldComponentUpdate', but like the internet says
it's often dangerous and if used poorly it can break your component.

What this package provides is a way of, along with react's
componentWillReceiveProps, know which are the props that are changing
with every render of your component.

If there's some properties that you don't need to compare or they don't
change at all (which you can check with this package) you can then
leverage on shouldComponentUpdate to avoid unnecessary re-renders.

## Usage
### Add it to your project
```npm install deep-diff-object  --save-dev```

### Import it on your component
```import deepDiff from 'deep-diff-object'```

### Use componentWillReceiveProps with it
```
componentWillReceiveProps(nextProps) {
  const result = deepDiff(this.props, nextProps);

  // Log the result and identify the changes
  console.log(result);
}
```

The 'result' object will look like this:
```
result = {
  one: [ {'prop1': value1}, {'prop2', value2}, ...],
  two: [ {'prop1': value1}, {'prop2', value2}, ...]
}

# Example:

const objA = {
  name: 'Wilson',
  age: 33,
  score: [2,5,7,8]
};

const objB = {
  name: 'Barbara',
  age: 31,
  score: [2,5,7,8]
};

let result = deepDiff(objA, objB);

The output would be:

result = {
  one: [ { name: 'Wilson' }, { age: 33 } ],
  two: [ { name: 'Barbara' }, { age: 31 } ]
} // name and age are different

```

### Identify the bottlenecks and leverage shouldComponentUpdate
```
shouldComponentUpdate(nextState, nextProps) {
  // assume 'name' is a prop that changes all the time but it doesn't
  // concern your component (it shouldn't re-render if that prop changes)
  if (this.props.name !== nextProps.name) {
    return false
  }

  return true
}
```

### Parameters
* deepDiff(objectOne, objectTwo)

* objectOne: Object | First object of the comparison
* objectTwo: Object | Second object of the comparison

No more useless re-renders.

* Found an issue? https://github.com/jpggvilaca/deep-diff-object/issues
* Want to contribute? Make a PR and I'll check it out!
