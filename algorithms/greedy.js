/**
    Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum.
    Greedy algorithms are usually straightforward to implement and can provide efficient solutions for certain problems.
    However, they do not guarantee an optimal solution for all problems.
*/

/**
    Greedy Algorithm Example: Coin Change Problem
    The Coin Change problem is a classic problem that asks for the minimum number of coins needed to make change for a given amount of money.
    The goal is to find the most efficient way of making change using a limited set of coin denominations.
*/
class Greedy {
    coinChange(coins, amount) {
        coins.sort((a, b) => b - a); // Sort coins in descending order
        let count = 0;
        let requiredCoins = [];

        for (let i = 0; i < coins.length; i++) {
            while (amount >= coins[i]) {
                amount -= coins[i];
                requiredCoins.push(coins[i]);
                count++;
            }
        }

        if (amount === 0) {
            return [count, requiredCoins];
        } else {
            return [0, [0]]; // No possible way to make change
        }
    }
}


//Example Usage
const greedy = new Greedy();

const coins = [1, 2, 5, 10, 25]; // Coin denominations
const amount = 63; // Amount to make change for

const coinChanged = greedy.coinChange(coins, amount);

console.log(`Minimum number of coins needed for amount ${amount}: ${coinChanged[0]} of denominations ${coinChanged[1].join(', ')}`);