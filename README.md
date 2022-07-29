# Object diffing

## Philosophy

Deep diff two objects. Compares two objects and outputs an object with all the changes between them.

The original intent was to use it with React (see bottom of the readme) but it's completely standalone.

## Usage

### Add it to your project

`npm i -D deep-diff-object`
or
`yarn add deep-diff-object`

### Import it on your component

`import deepDiff from 'deep-diff-object'`

### How to use it

const result = deepDiff(ObjectOne, ObjectTwo);

The 'result' object will look like this:

```
result = {
  one: [
    {'key1': value1},
    ...
  ],
  two: [
    {'key1': value1},
    ...
  ],
  ...
};

Where 'key1' with 'value1' are the different keys and values after the comparison

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

const result = deepDiff(objA, objB);

The output would be:

result = {
  one: [ { name: 'Wilson' }, { age: 33 } ],
  two: [ { name: 'Barbara' }, { age: 31 } ]
}; // name and age are different
```

_NOTE_ You can also run `node tests/debug` to try it out first.

#### (React part, this was the original intent)

In order to improve a react component performance the method that's
often used is 'shouldComponentUpdate', but like the internet says
it's often dangerous and if used poorly it can break your component.

What this package provides is a way of, along with react's
componentWillReceiveProps, know which are the props that are changing
with every render of your component.

If there's some properties that you don't need to compare or they don't
change at all (which you can check with this package) you can then
leverage on shouldComponentUpdate to avoid unnecessary re-renders.

#### Use componentWillReceiveProps with it

```
componentWillReceiveProps(nextProps) {
  const result = deepDiff(this.props, nextProps);

  // Based on what changed, apply your logic
  ...
}
```

#### Identify the bottlenecks and leverage shouldComponentUpdate

```
shouldComponentUpdate(nextState, nextProps) {
  const result = deepDiff(this.props, nextProps);

  // assuming 'name' is a prop that changes all the time but it doesn't
  // concern your component (it shouldn't re-render if that prop changes)
  if (this.props.name !== nextProps.name) {
    return false;
  }

  return true;
}
```

#### Usage with hooks

```
const diff = deepDiff(objA, objB);

// Example
// console.log(diff);
//
// {
//   one: [{ isEnabled: false }],
//   two: [{ isEnabled: true }],
// }

const someVar = useMemo(() => {
  // Your logic here...
}, [diff.one.length]) // Or [diff.one[0].isEnabled]
```

- Found an issue? https://github.com/jpggvilaca/deep-diff-object/issues
- Want to contribute? Make a PR and I'll check it out!
