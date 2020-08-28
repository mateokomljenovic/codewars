//Codewars cardio with stepped solutions

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

function removeSmallest(numbers) {
  // 1. spread the array cause we are not allowed to mutate the array
  let spread = [...numbers]
  // 2. find the minimum in the spreaded array
  let min = Math.min.apply(null, spread)
  // 3. we want to find mins index in the array so we can delete it
  let indexMin = spread.indexOf(min)
  // 4. splice the array
  spread.splice(indexMin, 1)
  // 5. return spliced
  return spread
  return numbers 
}