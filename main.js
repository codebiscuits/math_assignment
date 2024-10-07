const samples= [4.2, 5.1, 3.8, 4.7, 5.3];

function findMean(nums) {

    let count = nums.length;

    let sum = 0.0;

    for (let i = 0; i < count; i++) {
        sum += nums[i];
    }

    return sum / count;
}

let mean = findMean(samples)

let roundedMean = Math.round(mean * 100) / 100

let message = "mean of samples: " + roundedMean

console.log(message);
