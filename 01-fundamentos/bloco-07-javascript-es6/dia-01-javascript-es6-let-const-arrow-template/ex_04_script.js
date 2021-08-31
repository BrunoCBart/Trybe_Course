const longestWord = (words) => {
  const sortedWords = words.split(' ').sort((a, b) => b.length - a.length);
  return sortedWords[0]
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))