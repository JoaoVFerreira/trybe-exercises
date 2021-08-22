const dogApi = async () => {
  const fetchURL = await fetch('https://dog.ceo/api/breeds/image/random');
  const response = await fetchURL.json()
  return fetchURL.ok? response : new Error('requested failed');
}

module.exports = { dogApi }