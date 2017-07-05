### Object diffing

The purpose of this package is to deep diff two objects.
This will, compare two objects and then output an object with
all the changes between them.

The intent was to use it with React in order to compare
the component's class props with the nextProps that it'll receive.

So, you can use react's willReceiveProps method, deep diff
this.props and nextProps, find what's changing between renders,
and then apply shouldComponentUpdate accordingly.
