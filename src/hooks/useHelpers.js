export const useHelpers = () => {

  const removePassword = (values) => {
    const listOfEntries = Object.entries(values)
    
    const filterPasswordEntry = (entries) => {
      const filteredArray = entries.filter(entry => {
        return !entry[0].includes('password')
      })
      return filteredArray
    }
    
    const filteredValues = filterPasswordEntry(listOfEntries)
    return Object.fromEntries(filteredValues)
  }

  return { removePassword }
}