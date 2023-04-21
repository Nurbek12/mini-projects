const app = new Vue({
    el: '#app',
    data: {
        gamearr: [
            '7',0,'8', 0,'2',0, '3','5','4',
            '9',0,0, '8','3',0, '1','2',0,
            '1','3','2', 0,0,0, '7',0,'8',
            
            0,'4',0, '7','5','8', 0,'3',0,
            '5','2',0, '6','1','9', '4','8','7',
            0,'9',0, '3','4','2', 0,'6',0,
        
            '2',0,'9', 0,0,0, '6','1',0,
            0,'1','6', '2','9','5', '8',0,'3',
            '3','7',0, 0,'8',0, '9',0,'2',
        ],
        carr: [
            [1, 2, 3, 10, 11, 12, 19, 20, 21],
            [4, 5, 6, 13, 14, 15, 22, 23, 24],
            [7, 8, 9, 16, 17, 18, 25, 26, 27],
            [28, 29, 30, 37, 38, 39, 46, 47, 48],
            [31, 32, 33, 40, 41, 42, 49, 50, 51],
            [34, 35, 36, 43, 44, 45, 52, 53, 54],
            [55, 56, 57, 64, 65, 66, 73, 74, 75],
            [58, 59, 60, 67, 68, 69, 76, 77, 78],
            [61, 62, 63, 70, 71, 72, 79, 80, 81]
        ],
        currentnum: null,
        win: false,
        tim: null,
        time: '00:00',
        x: 0, y: 0, c: 0, n: 0,
    },
    mounted(){
        let a = 0, b = 0;
        this.tim = setInterval(() => {
            this.time = `${b>=10?b:'0'+b}:${a>=10?a:'0'+a}`;
            a++;
            if(a > 59){
                b++;
                a= 0;
            }
            if(this.windgame()){
                clearInterval(this.tim);
            }
        }, 1000)
    },
    methods: {
        renderHover(i){
            this.n = this.gamearr[i];
            this.x = Math.floor(i / 9) + 1;
            this.y = (i) % 9 + 1;
            this.currentnum = i;
            switch(i+1){
                case 1: case 2: case 3: case 10: case 11: case 12: case 19: case 20: case 21: this.c = 1; break;
                case 4: case 5: case 6: case 13: case 14: case 15: case 22: case 23: case 24: this.c = 2; break;
                case 7: case 8: case 9: case 16: case 17: case 18: case 25: case 26: case 27: this.c = 3; break;
                case 28: case 29: case 30: case 37: case 38: case 39: case 46: case 47: case 48: this.c = 4; break;
                case 31: case 32: case 33: case 40: case 41: case 42: case 49: case 50: case 51: this.c = 5; break;
                case 34: case 35: case 36: case 43: case 44: case 45: case 52: case 53: case 54: this.c = 6; break;
                case 55: case 56: case 57: case 64: case 65: case 66: case 73: case 74: case 75: this.c = 7; break;
                case 58: case 59: case 60: case 67: case 68: case 69: case 76: case 77: case 78: this.c = 8; break;
                case 61: case 62: case 63: case 70: case 71: case 72: case 79: case 80: case 81: this.c = 9; break;
            }
        },
        addNumArr(i){
            this.n = i;
            if(this.currentnum == null) return;
            if(typeof this.gamearr[this.currentnum] === "string") return;
            this.gamearr[this.currentnum] = this.findFrNum(i)?i+0.1:i;
            this.gamearr.push(0);
            this.gamearr.pop();
        },
        findFrNum(a){
            let xe = false, ye = false, ce = false;
            for(let i=0;i<9;i++){
                if(this.gamearr[9*i + (this.y - 1)] == a && this.gamearr[9*i + (this.y - 1)] != 0){
                    ye = true;
                }
                if(this.gamearr[9*(this.x - 1) + i] == a && this.gamearr[9*(this.x - 1) + i] != 0){
                    xe = true;
                }
                if(this.gamearr[this.carr[this.c - 1][i] - 1] == a && this.gamearr[this.carr[this.c - 1][i] - 1] != 0){
                    ce = true;
                }
            }
            return xe || ye || ce;
        },
        windgame(){
            if(!this.gamearr.includes(0)){
                for(let i=0;i<this.gamearr.length;i++){
                    if(Math.round(this.gamearr[i]) < this.gamearr[i]){
                        return false;
                    }else{
                        continue;
                    }
                }
                return true;
            }
            return false;
        }
    },
})