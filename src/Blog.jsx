const Header = () => {
  return (
    <div>
      <h1> welcome abdullahi fuel company</h1>
    </div>
  );
}
const Post = () => {
  return (
    <div>
      <h2> best fuel in the world </h2>
      <p> our fuel is the best fuel in the world because it is very clean and efficient </p>
    </div>
  )
}
const Footer = () => {
  return(
    <div>
      <h3> contact us at : 
        <a href="mailto:info@abdullahifuel.com">info@abdullahifuel.com</a>
      </h3>
    </div>
  )
}

function Blog() {
  return (
    <>
      <Header />
      <Post />
      <Footer />
    </>
  )
}
export default Blog;