var Filmstrip = function(model, args) {

    this.model = null;
    this.width = 0;
    this.height = 0;
    this.orientation = '';
    this.video = null;
    this.startAt = 0;
    this.canvas = null;
    this.canvasPadding = 0;
    this.context = null;
    this.frameHeight = 0;
    this.frameWidth = 0;
    this.framePadding = 0;
    this._count = 0;
    this._step = 0;
    this._maxSteps = 0;

    this._createCanvas = function() {
        return $('<canvas />')
            .attr({ width: this.width, height: this.height })
            .css({ background: '#222' })
            .get(0);
    };

    __construct = function(self) {
        self.model = model;
        self.orientation = (args.orientation === undefined) ? 'vertical' : args.orientation;
        self.width = (args.width === undefined) ? 0 : args.width;
        self.height = (args.height === undefined) ? 0 : args.height;
        self.startAt = (args.startAt === undefined) ? 5 : args.startAt;
        self.canvas = self._createCanvas();
        self.context = self.canvas.getContext('2d');
        self.canvasPadding = (args.canvasPadding === undefined) ? 10 : args.canvasPadding;
    }(this);

    this.load = function(video) {
        var self = this;
        var video = $('<video preload="metadata" />')
            .attr('src', self.model.src)
            .bind('loadedmetadata', function() {
                self.video = this;
                $(self).trigger('loaded');
            })
            .bind('seeked', function() {
                self._drawFrame();
                if (self._count < self._maxSteps - 1) {
                    self._count++;
                    self.video.currentTime += self._step;
                } else {
                    self.setCanvas(self._tmpCanvas);
                    self._destroyTmpCanvas();
                    $(self).trigger('redraw');
                }
            });
    };

    this.resize = function(width, height) {
        if (height === undefined) {
            if (this.orientation == 'vertical') {
                this.height = width;
            }
            if (this.orientation == 'horizontal') {
                this.width = width;
            }
        } else {
            this.width = width;
            this.height = height;
        }

        switch(this.orientation) {
            case 'horizontal':
                this.frameHeight = this.height - (this.canvasPadding * 2);
                this.frameWidth = Math.ceil(this.video.videoWidth * this.frameHeight / this.video.videoHeight);
                this._maxSteps = Math.floor(this.width / this.frameWidth);
                this.framePadding = (this.width - (this._maxSteps * this.frameWidth)) / (this._maxSteps - 1);
                break;
            case 'vertical':
                this.frameWidth = this.width - (this.canvasPadding * 2);
                this.frameHeight = Math.ceil(this.video.videoHeight * this.frameWidth / this.video.videoWidth);
                this._maxSteps = Math.floor(this.height / this.frameHeight);
                this.framePadding = (this.height - (this._maxSteps * this.frameHeight)) / (this._maxSteps - 1);
                break;
        }

        this._count = 0;
        if (this._maxSteps == 1) {
            this.framePadding = 0;
            this._step = this.video.duration - (this.startAt * 2);
        } else {
            this._step = (this.video.duration - (this.startAt * 2)) / (this._maxSteps - 1);
        }

        if (this._maxSteps) {
            this._createTmpCanvas();
            this.video.currentTime = this.startAt;
        }
    };

    this._drawFrame = function() {
        switch(this.orientation) {
            case 'horizontal':
                var x = (this.frameWidth * this._count) + (this.framePadding * this._count);
                var y = this.canvasPadding;
                break;
            case 'vertical':
                var x = this.canvasPadding;
                var y = (this.frameHeight * this._count) + (this.framePadding * this._count);
                break;
        }
        this._tmpContext.drawImage(this.video, x, y, this.frameWidth, this.frameHeight);
    };

    this.on = function(event, handler) {
        $(this).on(event, handler);
    };

    this._createTmpCanvas = function() {
        this._tmpCanvas = this._createCanvas();
        this._tmpContext = this._tmpCanvas.getContext('2d');
    };

    this._destroyTmpCanvas = function() {
        delete this._tmpCanvas;
        delete this._tmpContext;
    };

    this.setCanvas = function(canvas) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.context.drawImage(canvas, 0, 0);
    };

};
