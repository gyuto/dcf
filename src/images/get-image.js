const importAll = r => {
  return r.keys().map(r)
}

const images = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/))

const getImage = fileName => {
  return images.find(img => img.includes(fileName))
}

export default getImage
