var withCircle = function () {
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };

    this.grow = function () {
        this.radisu++;
    };

    this.shrink = function () {
        this.radius--;
    }
};

var withClickable = function () {
    this.hover = function () {
        console.log('hovering');
    };

    this.press = function () {
        console.log('button pressed');
    };

    this.release = function () {
        console.log('button released');
    };

    this.fire = function () {
        this.action.fire();
    };
};

var withRectangle = (function () {
    function area() {
        return this.length * this.width;
    }

    function grow() {
        this.length++;
        this.width++;
    }

    function shrink() {
        this.length--;
        this.width--;
    }

    return function () {
        this.area = area;
        this.grow = grow;
        this.shrink = shrink;
        return this;
    }
})();

var RectangularButton = function (length, width, label, action) {
    this.length = length;
    this.width = width;
    this.label = label;
    this.action = action;
};

withClickable.call(RectangularButton.prototype);
withRectangle.call(RectangularButton.prototype);

var button = new RectangularButton(4, 2, 'delete', function () {
        return 'deleted'
    }
);

button.area(); // 8
button.grow();
button.area(); // 15

