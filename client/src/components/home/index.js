import React from "react";
import axios from "axios";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    axios.get("/api/books").then(result => {
      console.log(result.data);
      this.setState({ books: result.data });
    });
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          {this.state.books.map(
            ({ _id, book_name, book_author, description }) => (
              <div className="col-sm-4 mb-3" key={_id}>
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">{book_name.toUpperCase()}</p>
                    <p class="card-text">{description}</p>
                    <p className="text-primary font-italic">
                      -{book_author.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
