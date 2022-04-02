
export function getRatingLevel(ratingCount: number): string {
  switch (true) {
    case (ratingCount >= 0 && ratingCount < 3):
      return 'Bad';
    case (ratingCount >= 3 && ratingCount < 5):
      return 'Normal';
    case (ratingCount >= 5 && ratingCount < 8):
      return 'Good';
    case (ratingCount >= 8 && ratingCount < 10):
      return 'Very good';
    case (ratingCount ===10):
      return 'Awesome';
    default:
      return 'default';
  }
}
