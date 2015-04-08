# Meteor React Overlay

A reusable component overlay made with React, inspired by Blaze `grigio:overlay` but much more manageable and nested friendly.

http://react-overlay.meteor.com/

### Usage

Inside an app with `grigio:babel` and `grove:react` type:


```
meteor add grigio:react-overlay
```

Now you have your component ready to use, just put the placeholder id in your `<body>`.

```
...
<body>
  <div id="overlay"></div>
...
```

Then you can use it when you need and embed other components or divs

```
...
handleClickIneedAnOverlayNow: function(event) {
  React.render(
    <Overlay>
      <Leaderboard/>
    </Overlay>
    , document.getElementById('overlay')
  );
},
...
```

An example app is http://github.com/grigio/meteor-react-overlay-example

### License

MIT