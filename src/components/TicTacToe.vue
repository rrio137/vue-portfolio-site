<template>
  <div class="tic-tac-toe">
    <div class="status">{{ statusMessage }}</div>

    <div class="board">
      <div
        v-for="(cell, index) in board"
        :key="index"
        class="cell"
        :class="{ win: winningCombination.includes(index) }"
        @click="makeMove(index)"
      >
        {{ cell }}
      </div>
    </div>

    <button class="reset-btn" @click="resetGame">Reset Game</button>
  </div>
</template>

<script>
export default {
  name: "TicTacToe",
  data() {
    return {
      board: Array(9).fill(""),
      currentPlayer: "X",
      winner: null,
      winningCombination: [],
    };
  },
  computed: {
    statusMessage() {
      if (this.winner) return `Player ${this.winner} wins!`;
      if (!this.board.includes("")) return "It's a tie!";
      return `Player ${this.currentPlayer}'s turn`;
    },
  },
  methods: {
    makeMove(index) {
      if (this.board[index] || this.winner) return;
      this.$set(this.board, index, this.currentPlayer);
      this.checkWinner();
      if (!this.winner) {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
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
        [2, 4, 6],
      ];
      for (const combo of combos) {
        const [a, b, c] = combo;
        if (
          this.board[a] &&
          this.board[a] === this.board[b] &&
          this.board[a] === this.board[c]
        ) {
          this.winner = this.board[a];
          this.winningCombination = combo;
          return;
        }
      }
    },
    resetGame() {
      this.board = Array(9).fill("");
      this.currentPlayer = "X";
      this.winner = null;
      this.winningCombination = [];
    },
  },
};
</script>

<style scoped>
.tic-tac-toe {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
}

.status {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #764ba2;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.cell:hover {
  background-color: #e0e0e0;
  transform: scale(1.05);
}

.cell.win {
  background-color: #4ba261;
  color: #fff;
  animation: glow 0.6s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px #4ba261;
  }
  to {
    box-shadow: 0 0 20px #4ba261;
  }
}

.reset-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #764ba2;
  color: #fff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.reset-btn:hover {
  background-color: #5c3c86;
}
</style>