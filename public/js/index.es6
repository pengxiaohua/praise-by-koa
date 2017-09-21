let t = '';
class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;

    }

    clickAction() {
        this.element.click(() => {
            // 用setTimeout对点击事件稀释（或节流）
            if(t){
                clearTimeout(t);
            }
            t = setTimeout(()=> {
                if (this.num < 10) {
                    this.element.css('-webkit-filter', 'grayscale(0)');
                    $('#animation').addClass('num');
                    this.num = add(this.num);
                        setTimeout(function() {
                            $('#animation').removeClass('num');
                        }, 1000);
                } else {
                    this.element.css('-webkit-filter', 'grayscale(1)');
                    this.num = 0;
                }
                console.log('点赞次数：'+this.num);
            }, 800);
        })
    }
}

//用作测试
function add(i) {
    return i + 1;
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