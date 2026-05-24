import { useEffect, useState } from "react"

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [formError, setFormError] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        if (!response.ok) {
          throw new Error("Unable to fetch posts")
        }

        const data = await response.json()
        setPosts(data.slice(0, 20))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!title.trim() || !body.trim()) {
      setFormError("Title and body are required")
      return
    }

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      body: body.trim(),
      userId: 1,
      isLocal: true,
    }

    setPosts([newPost, ...posts])
    setTitle("")
    setBody("")
    setFormError("")
  }


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.body.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div style={{ padding: "20px" }}>
      <h1>CoreStack Challenge</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "24px" }}>
        <h2>Add a new post</h2>

        <div style={{ marginBottom: "12px" }}>
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              style={{ display: "block", width: "100%", padding: "8px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>
            Body
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
              rows="4"
              style={{ display: "block", width: "100%", padding: "8px" }}
            />
          </label>
        </div>

        {formError && <p style={{ color: "red" }}>{formError}</p>}

        <button type="submit">Add post</button>
      </form>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px", width: "100%" }}
      />

      {filteredPosts.length === 0 && <p>No posts found</p>}

      {filteredPosts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App