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
filmstrip.on('loaded', function() {
    //video metadata loaded
});

filmstrip.on('draw:started', function() {
    //resize started
});

filmstrip.on('draw:finished', function() {
    //resize finished
    this.drawCanvas($('#filmstrip')); //draw all canvas
});

filmstrip.on('draw:frame', function(event, args) {
    //frame drawn
    this.drawFrame($('#filmstrip'), args); //draw canvas frame by frame
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
