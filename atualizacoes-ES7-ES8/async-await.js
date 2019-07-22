async function getPosts() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const { results } = await response.json();
    return results.map(post => {
      console.log(post.email);
    });
  } catch (error) {
    console.error("Error no seu script");
  }
}
getPosts();
