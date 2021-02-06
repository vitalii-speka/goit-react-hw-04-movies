// заменили этот компонент на BooksList
// import React from "react";
// import { Link } from "react-router-dom";
// import "../index.css";

// const AuthorBooks = ({ books }) => {
//   return (
//     <>
//       <h2>Книги одного автора </h2>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             <div className="oneBooks">
//               <Link to={`/books/${book.id}`}>{book.title}</Link>
//               <img src={book.imgUrl} alt={book.title} />
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default AuthorBooks;

// можно сделать классом
// import { Component } from "react";
// import { Link } from "react-router-dom";
// class AuthorBooks extends Component {
//   state = {
//     books: [],
//   };
//   componentDidMount() {
//     console.log(`componentDidMount`);
//     // const id = Number(this.props.match.params.authorId);

//     //   const { books } = this.props.authors.find((author) => author.id === id);

//     // console.log(books);
//     this.setState({ books });
//   }

//   //   //   componentDidUpdate(prevProps, prevState) {
//   //   //     console.log(`componentDidUpdate`);
//   //   //     console.log(Number(this.props.match.params.authorId));
//   //   //     console.log(this.props.authors);
//   //   //   }
//   //   xxx = () => {
//   //     console.log(this.props.aurhors);
//   //   };

//   render() {
//     const { books } = this.state;
//     return (
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             <Link>{book.tirle}</Link>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
// export default AuthorBooks;
