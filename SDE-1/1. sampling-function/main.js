function sample(arr, k) {
  if (k > arr.length) return [];
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, k);
}

// ===== Usage =====
const arr = [1,2,3,4,5,6,7,8,9,10];
const k = 5;
console.log(sample(arr, k));