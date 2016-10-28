export default {
      operations: {
        '+': function(num1, num2) {
        return num1 + num2;
        },

        '-': function(num1, num2) {
          return num1 - num2;
        },

        '÷': function(num1, num2) {
          let value = num1 / num2
          return value !== Infinity ? value : 0;
        },

        '*': function(num1, num2) {
          return num1 * num2;
        }
      },
      operators: ['+', '-', '*', '÷']
}

