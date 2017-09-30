class TicTacToe {
    constructor() {
      this.current = 'x';
      this.matrix = [ [0, 0 ,0], [0, 0, 0], [0, 0, 0], ];
    }

    getCurrentPlayerSymbol() {
      return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
      if(  this.matrix[rowIndex][columnIndex] === 0){// 'x' && this.matrix[rowIndex][columnIndex] !== 'o' ){
           this.matrix[rowIndex][columnIndex] = this.current;
            if (this.current === 'x') this.current = 'o';
            else this.current = 'x';
          }
    }

    isDraw() {
      var v = 1
      var i, j;
      for(i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
          if(this.matrix[i][j] === 0)
          v = 0
        }
      }
      if(v === 0 ) return false
      else return true

    }/**/

    isFinished() {
      if (this.isDraw()===true) return true
       return false
    }

    getWinner() {
      var i
      for(i = 0; i < 3; i++){
        if (this.matrix[i][0] === this.matrix[i][1] === this.matrix[i][2] && this.matrix[i][0]!==0)
        return this.matrix[i][0]
      }
      for(i = 0; i < 3; i++){
        if (this.matrix[0][i] === this.matrix[1][i] === this.matrix[2][0] && this.matrix[0][i]!==0)
        return this.matrix[i][0]
      }
      if (this.matrix[0][0] === this.matrix[1][1] === this.matrix[2][2] && this.matrix[0][0]!==0)
      return this.matrix[0][0]

      if (this.matrix[0][2] === this.matrix[1][1] === this.matrix[2][0] && this.matrix[0][2]!==0)
      return this.matrix[0][2]
      if(this.isDraw() === true) return null


    }

    noMoreTurns() {
      var v = 1
      var i, j;
      for(i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
          if(this.matrix[i][j] === 0)
          v = 0
        }
      }
      if(v === 0 ) return false
      else return true
    }



    getFieldValue(rowIndex, colIndex) {
      if(this.matrix[rowIndex][colIndex] != 0)
      return this.matrix[rowIndex][colIndex]
      else return null

    }
}

module.exports = TicTacToe;
