const app = new Vue({
    el: '#app',
    data: {
        gamearr: [1, 2, 12, 0, 7, 11, 3, 10, 15, 13, 6, 4, 8, 14, 9, 5],
    },
    methods: {
        movenum(e, ind){
            // console.log(e, ind);
            ind = parseInt(ind);
            if(this.gamearr[ind] === 0) return;
            // let y = parseInt(e.getAttribute('data-y'));
            // let x = parseInt(e.getAttribute('data-x'));
            let temp = this.gamearr[ind];
            if(ind > 3 && this.gamearr[ind - 4] === 0){
                // y-=80;x+=0;
                this.gamearr[ind] = 0;
                this.gamearr[ind - 4] = temp;
            }else if(ind > 0 && this.gamearr[ind - 1] === 0 && ind % 4 !== 0){
                // x-=80;y+=0;
                this.gamearr[ind] = 0;
                this.gamearr[ind - 1] = temp;
            }else if(ind < 16 && this.gamearr[ind + 1] === 0 && (ind + 1)% 4 !== 0){
                // x+=80;y+=0;
                this.gamearr[ind] = 0;
                this.gamearr[ind + 1] = temp;
            }else if(ind < 12 && this.gamearr[ind + 4] === 0){
                // y+=80;x+=0;
                this.gamearr[ind] = 0;
                this.gamearr[ind + 4] = temp;
            }
            this.gamearr.push(0);
            this.gamearr.pop();
            // e.style.transform = `translate(${x}px, ${y}px)`;
            // e.setAttribute('data-y', y);
            // e.setAttribute('data-x', x);
            // if(wingame()){
            //     clearInterval(timeint);
            //     gameboard.classList.add('showtext');
            //     gameboard.setAttribute('data-text', `You win. Your time is ${endtime-1}`);
            // }
        }
    }
})