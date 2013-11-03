Filmstrip.js: an HTML5 video preview widget that will rock your world

This project is part of the Malbec Broadcast project that is moved and
weaved by the OpCoode Cooperative http://opcode.coop

This project like all the Malbec Broadcast projects is released under the 
AGPL v3 Licence.

Show the videos at Opcode Coop channel:

* http://www.youtube.com/watch?v=ex2nVUNmzeo
* http://www.youtube.com/watch?v=Yph6Z2rhA_k

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

####Capture frame
```html
<canvas id="filmstrip"></canvas>
<canvas id="frame"></canvas>
```

```javascript
filmstrip.on('loaded', function() {
    $('#frame').css({
        width: filmstrip.video.videoWidth,
        height: filmstrip.video.videoHeight
    });
});

$('#filmstrip').on('mousemove', function(event) {
    filmstrip.captureFrameAt(
        filmstrip.getSecondForMousePosition(
            event.offsetX,
            event.offsetY
        )
    );
});

filmstrip.on('frame:captured', function() {
    var ctx = $('#frame').get(0).getContext('2d');
    ctx.drawImage(filmstrip.capture, 0, 0);
});
```

####Using trottle function on resize (require underscore.js)
```javascript
var resize = _.throttle(function(event. ui) {
    filmstrip.resize(ui.size.width, ui.size.height)
}, 250, {leading: false});
```

####Dependencies

* jQuery

####Use ffmpeg to convert videos for better performance
```bash
ffmpeg -i original_video.mkv -s 320x180 -vcodec libx264 -an -r 1 filmstrip_video.mp4
```

####Run Example

```bash
cd example
npm install # install package.json
node server.js
```
