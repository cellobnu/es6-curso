async function getPosts(pages) {
  const promises = pages.map(page => fetch(`https://randomuser.me/api/?page=${page.page}&results=${page.limit}&nat=br`).then(r => r.json()).then(j => j.results))
  
  const pagina = await Promise.all(promises)
  console.log(pagina);
}

const data = [
{
  page: 1,
  limit: 5
},
 {
  page: 2,
  limit: 10
}
]
getPosts(data);
