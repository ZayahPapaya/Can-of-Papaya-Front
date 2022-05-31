import React from 'react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount() {
    let url = process.env.DBURL;
    const response = await axios.get(url);
    this.setState({books: response.data});
  }
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>{this.state.books.map(book =>(
            <>
            <h3>{book.name}</h3>
            <p>{book.author}</p>
            </>
          ))}</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
