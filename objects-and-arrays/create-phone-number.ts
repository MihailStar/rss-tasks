export function createPhoneNumber(nums: number[]): string {
  return nums.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
