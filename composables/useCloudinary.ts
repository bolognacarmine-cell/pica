export const useCloudinary = () => {
  const transformImage = (url: string, options: { width?: number; height?: number; crop?: string; quality?: string | number; format?: string } = {}) => {
    if (!url || !url.includes('cloudinary.com')) return url

    const {
      width,
      height,
      crop = 'fill',
      quality = 'auto',
      format = 'auto'
    } = options

    // Se l'URL ha già delle trasformazioni, le sostituiamo o le aggiungiamo
    // Esempio URL: https://res.cloudinary.com/demo/image/upload/v1234567/sample.jpg
    const baseUrl = url.split('/upload/')[0]
    const restUrl = url.split('/upload/')[1]
    
    // Rimuoviamo eventuali trasformazioni esistenti nell'URL (se presenti dopo /upload/)
    const parts = restUrl.split('/')
    let publicIdWithFormat = ''
    
    // Cerchiamo la parte che contiene il public ID (quella che non inizia per v[numero])
    for (let i = 0; i < parts.length; i++) {
      if (!parts[i].match(/^v\d+/) && !parts[i].includes('=')) {
        publicIdWithFormat = parts.slice(i).join('/')
        break
      }
    }

    if (!publicIdWithFormat) publicIdWithFormat = restUrl

    const transformParts = []
    if (width) transformParts.push(`w_${width}`)
    if (height) transformParts.push(`h_${height}`)
    if (crop) transformParts.push(`c_${crop}`)
    if (quality) transformParts.push(`q_${quality}`)
    if (format) transformParts.push(`f_${format}`)

    const transformation = transformParts.join(',')
    
    return `${baseUrl}/upload/${transformation}/${publicIdWithFormat}`
  }

  return {
    transformImage
  }
}
