import React from "react";
import cn from "classnames";
import classes from "./SingleUser.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";

const SingleUser = (props) => {
  const { name, email, image } = props.data;
  return (
    <div>
      <div className={cn(globalStyles.card, classes["Card-Width"])}>
        <img
          src={image}
          className={globalStyles["card-img-top"]}
          alt={"profile image"}
        />
        <div className={globalStyles["card-body"]}>
          <h5 className={globalStyles["card-title"]}>{name}</h5>
          <h5 className={globalStyles["card-text"]}>{email}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;

// const User = (props) => {
//   // console.log(props, "this is a change i just made , users and tasks")

//   const { name, image, email, _id, tasks } = props.user;
//   console.log(props);
//   // console.log(props.user.tasks, "second user")

//   console.log(props, "props");

//   return (
//     <div
//       className="card justify-content-center ml-3 mb-1"
//       style={{ width: "20em" }}
//     >
//       <img
//         src={image}
//         className="card-img-top"
//         style={{ width: "20em", height: "10em", padding: "5px" }}
//       />
//       <h3 className="card-title">{name}</h3>
//       {/* <UserShow  user={props.user}/> */}
//       <div className="card-text">
//         Assigned Tasks:{" "}
//         {props.tasks === undefined || tasks.length == 0 ? (
//           <h>No Task</h>
//         ) : (
//           <span>{tasks.length}</span>
//         )}{" "}
//       </div>
//       <p>{email}</p>

//       <div>
//         <button className="btn-bg-light p-1 m-2 text-light border-0">
//           <Link to={`/users/${_id}/edit`} className="fas fa-user-edit">
//             EDIT
//           </Link>
//         </button>
//         <button className="btn-danger p-1 border-0 round">
//           <Link
//             to={`/users`}
//             onClick={() => props.deleteUser(_id, tasks)}
//             className="fas fa-trash"
//           >
//             DELETE
//           </Link>
//         </button>
//       </div>

//       {/* <Link to={`/users/${_id}`} className="user-link" >More Detail</Link> */}

//       <button onClick={props.handleUser}>More Detail</button>
//       {props.showUserDetail ? <ShowUser data={props.user} /> : null}
//     </div>
//   );
// };

// export default User;
