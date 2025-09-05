<template>
  <div class="tic-tac-toe">
    <h2>Tic-Tac-Toe</h2>
    <div class="board">
      <div 
        v-for="(cell, index) in board" 
        :key="index" 
        class="cell"
        @click="makeMove(index)"
      >
        {{ cell }}
      </div>
    </div>
    <p v-if="winner">{{ winnerMessage }}</p>
    <button @click="resetGame">Restart</button>
  </div>
</template>

<script>
export default {
  name: "TicTacToe",
  data() {
    return {
      board: Array(9).fill(""),
      currentPlayer: "X",
      winner: null
    };
  },
  computed: {
    winnerMessage() {
      return this.winner === "Draw"
        ? "It's a draw!"
        : `Player ${this.winner} wins!`;
    }
  },
  methods: {
    makeMove(index) {
      if (!this.board[index] && !this.winner) {
        this.board[index] = this.currentPlayer;
        if (this.checkWinner()) {
          this.winner = this.currentPlayer;
        } else if (this.board.every(cell => cell)) {
          this.winner = "Draw";
        } else {
          this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        }
      }
    },
    checkWinner() {
      const combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      return combos.some(([a, b, c]) => {
        return (
          this.board[a] &&
          this.board[a] === this.board[b] &&
          this.board[a] === this.board[c]
        );
      });
    },
    resetGame() {
      this.board = Array(9).fill("");
      this.currentPlayer = "X";
      this.winner = null;
    }
  }
};
</script>

<style scoped>
.tic-tac-toe {
  text-align: center;
  margin: 2rem auto;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
  justify-content: center;
  margin: 1rem 0;
}

.cell {
  width: 100px;
  height: 100px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #333;
  cursor: pointer;
  background: #f0f0f0;
}

.cell:hover {
  background: #ddd;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background: #764ba2;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #5c3c86;
}
</style>