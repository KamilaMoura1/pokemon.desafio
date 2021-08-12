export const ordemAZ = (data) => data.sort((a, b) => (a.name < b.name) ? - 1 : 1);

export const ordemZA = (data) => data.sort((a, b) => (a.name > b.name) ? - 1 : 1);

export const searchName = (data, condition) => {
    const searchResults = data.filter(n => n.name.toLowerCase().includes(condition.toLowerCase()));
    return searchResults;
  }