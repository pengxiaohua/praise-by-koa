class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;

    }

    clickAction() {
        this.element.click(() => {
            if (this.num < 10) {
                this.element.css('-webkit-filter', 'grayscale(0)');
                $('#animation').addClass('num');
                this.num++
                    setTimeout(function() {
                        $('#animation').removeClass('num');
                    }, 1000);
            } else {
                this.element.css('-webkit-filter', 'grayscale(1)');
                this.num = 0;
            }
            console.log(this.num);
        })
    }
}


class Thumb extends PraiseButton {
    constructor(num, element) {
        super(num, element);
    }
}
export
default {
    Thumb
}

// 实例化
// let run= new Thumb(0,$('#thumb'));
// run.clickAction();