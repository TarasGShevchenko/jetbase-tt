const numbersService = require('../services/numbers');

function findMissingNumbers(req, res) {
  const numbersStr = req.query?.numbers;

  try {
    if (!numbersStr) throw ({message: 'Numbers is required'})

    const numbers = numbersStr.split(',').map(Number)

    if (numbers.some(isNaN)) throw { message: 'Invalid numbers provided' };

    if (numbers.length <= 0) throw { message: 'Numbers is required' };

    const missingNumbers = numbersService.findMissingNumbers(numbers);

    const complexity = numbersService.complexity(numbers);

    res.status(200).json({ missingNumbers, complexity });
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  findMissingNumbers
};
