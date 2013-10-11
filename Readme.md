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
```

####Events

```javascript
// draw whole canvas on resized
filmstrip.on('draw:finished', function() {
    this.drawCanvas($('#filmstrip'));
});

// draw frame by frame on resize
fsV.on('draw:frame', function(event, args) {
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
