Filmstrip.js: an HTML5 video preview widget that will rock your world

This project is part of the Malbec Broadcast project that is moved and
weaved by the OpCoode Cooperative http://opcode.coop

This project like all the Malbec Broadcast projects is released under the 
AGPL v3 Licence.

Show the video: http://www.youtube.com/watch?v=iOzS8xtnsQo

Play with the demo http://www.opcode.coop/filmstrip/


####Usage

```html
<canvas id="filmstrip"></canvas>
```

```javascript
filmstrip = new Filmstrip(model, {
    width: 120,
    height: 600,
    bgColor: '#333',
    drawHoles: true,
    holesColor: '#222',
    holesDispersion: .7,
    bandsPadding: 20,
    autoOrientation: true,
    strechOnResize: true,
});

filmstrip.load();

filmstrip.on('draw:finished', function() {
    this.drawCanvas($('#filmstrip'));
});
```

####Resize
```javascript
filmstrip.resize(120, 800);
```

####Events

```javascript
//video metadata loaded
filmstrip.on('loaded', function() {
});

//resize started
filmstrip.on('draw:started', function() {
});

//resize finished
filmstrip.on('draw:finished', function() {
    //draw all canvas
    this.drawCanvas($('#filmstrip'));
});

//frame drawn
filmstrip.on('draw:frame', function(event, args) {
    //draw canvas frame by frame
    this.drawFrame($('#filmstrip'), args);
});
```
####Dependencies

* jQuery

####Run Example

```bash
cd example
npm install # install package.json
node server.js
```
