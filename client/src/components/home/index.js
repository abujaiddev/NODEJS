import React from "react";
import { connect } from "react-redux";
import { books } from "../store/actions/bookAction";

class Home extends React.Component {
  componentDidMount() {
    this.props.books();
  }
  render() {
    // const { books } = this.props.books;
    console.log("++++++++++++++", this.props);
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4 mb-3">
            <div className="card">
              <div className="card-body">
                <p className="card-title">book title</p>
                <p className="card-text">description</p>
                <p className="text-primary font-italic">-Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    books: state.book
  };
};
export default connect(mapStateToProps, { books })(Home);
